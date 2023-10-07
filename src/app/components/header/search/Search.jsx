'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter()

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  // Handling the submit
  const submitHandler = (event) => {
    event.preventDefault();
    if(!searchValue) return;
    router.push(`/search/${searchValue}`)
    setSearchValue('')
  };

  return (
    <form className="bg-background-color-c rounded-xl flex justify-between items-center gap-2 py-2 px-4" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="search ..."
        name="search"
        id="searchInp"
        value={searchValue}
        onChange={onChangeHandler}
        className="outline-none text-dark-bright-text-color bg-transparent"
      />
      <button
        disabled={!searchValue}
        type="submit"
        className="text-2xl dark:text-text-color-white/50 dark:hover:text-text-color-white disabled:text-text-color-dark/30 text-text-color-dark transition-all duration-300"
      >
        <BiSearch />
      </button>
    </form>
  );
};

export default Search;
