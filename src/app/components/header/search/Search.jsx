'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { BiSearch } from 'react-icons/bi';
import { getProductsBySearch } from '@/app/lib/products-utils';
import Link from 'next/link';
import Image from 'next/image';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchPop, setShowSearchPop] = useState(false);
  // const [showSearchPopOnFocous, setShowSearchPopOnFocous] = useState(false);
  const [searchLoadign, setSearchLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  const getApiData = async () => {
    setSearchLoading(true);
    const data = await getProductsBySearch(searchValue);
    setSearchLoading(false);
    setSearchResults(data);
  };

  useEffect(() => {
    setSearchValue('')
  }, [pathname])

  useEffect(() => {
    if (searchValue.length > 3) {
      getApiData();
      setShowSearchPop(true);
    } else {
      setShowSearchPop(false);
    }
  }, [searchValue]);

  const onFocousHandler = (e) => {
    if(searchValue.length > 3){
      setShowSearchPop(true)
    }
  }
  const onBlurHandler = (e) => {
    setShowSearchPop(false)
  }

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  // Handling the submit
  const submitHandler = (event) => {
    event.preventDefault();
    if (!searchValue) return;
    router.push(`/search/${searchValue}`);
    console.log(searchValue, 'inside search');
    setSearchValue('');
  };

  return (
    <div className="relative">
      <form
        className="bg-background-color-c/10 rounded-xl flex justify-between items-center gap-4 py-2 px-4 mb-2"
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <input
          type="text"
          placeholder="search ..."
          name="search"
          id="searchInp"
          value={searchValue}
          onChange={onChangeHandler}
          className="outline-none text-sm text-dark-bright-text-color bg-transparent w-full"
          onFocus={onFocousHandler}
          onBlur={onBlurHandler}
        />
        <button
          disabled={!searchValue}
          type="submit"
          className="text-2xl text-text-color-white disabled:text-text-color-white/50 hover:text-primary-color transition-all duration-300"
        >
          <BiSearch />
        </button>
      </form>
      <div
        className={`${
          !showSearchPop && 'hidden'
        } bg-[#2e2d2aff] text-[#cccccc] absolute top-[125%] left-0 w-full p-4 rounded-xl`}
      >
        {searchLoadign && (
          <span className="w-full py-2 block transition-color px-4">
            loading ...
          </span>
        )}
        <div>
          {searchResults.length !== 0 && !searchLoadign
            ? searchResults.map((product) => {
                return (
                  <div key={product.id} className="w-full">
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full py-3 rounded-xl hover:bg-[#4d4d4d] transition-colors duration-100 px-4 flex justify-between items-center"
                    >
                      <span>{product.title}</span>
                      <div className='w-20 h-20 overflow-hidden rounded-xl'><Image src={product.image} alt='...' width={75} height={75} className='object-cover w-full block' /></div>
                    </Link>
                  </div>
                );
              })
            : !searchLoadign && <span>cant find anything</span>}
        </div>
      </div>
    </div>
  );
};

export default Search;
