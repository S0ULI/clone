'use client'

import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CartContext from '@/app/store/cart-context';
import RatingProgress from '../rating-progress/RatingProgress';

const Card = ({ data }) => {
  const { id, title, vote_average, poster_path, backdrop_path, overview } = data;

  const cartCtx = useContext(CartContext);
  const productStatus = cartCtx.ifProductIsInCart(id)

  const toggleCartStatusHandler = () => {
    if(!productStatus) {
      cartCtx.addToCart(data)
    } else {
      cartCtx.removeFromCart(id)
    }
  }

  const slug = title.split(' ').join('-').toLowerCase()

  return (
    <div className='flex flex-col w-full sm:max-w-[17rem] bg-background-color-c dark:bg-foreground-color rounded-xl overflow-hidden hover:-translate-y-2 opacity-90 hover:opacity-100 transition-all duration-300'>
    <Link
      href={`/products/${id}?=${slug}`}
      className="flex flex-col"
    >
      <Image
        alt={title ? title : 'Title'}
        width={500}
        height={282}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        style={{
          maxWidth: '100%',
          height: '152px',
          objectFit: "cover"
        }}
        src={backdrop_path || poster_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path || poster_path}` : '/logo.svg' }
      />
      <div className="flex flex-col items-center text-center gap-4 p-4">
        <h3 className="truncate bg-background-color-p dark:bg-dark-background-color-p text-dark-gray-color dark:text-light-gray-color py-2 px-4 rounded-full w-full">
          {title ? title : 'No Title'}
        </h3>
        <span>
          <RatingProgress rating={vote_average ? vote_average : 0}/>
        </span>
        <p className="line-clamp-2 px-1 text-dark-gray-color/70">
          {overview ? overview : '! There are no Description For this movie yet !'}
        </p>
      </div>
    </Link>
      <button onClick={toggleCartStatusHandler} className="hover:bg-shop-button-color bg-secondary-color/80 dark:hover:bg-background-color-c dark:text-text-color-dark  dark:bg-cyan-600  py-4 text-background-color-c rounded-xl transition-all duration-300">
        {productStatus ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      </div>
  );
};

export default Card;
