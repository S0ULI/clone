import Image from 'next/image';
import Link from 'next/link';

import AddToCart from '@/app/products/[productId]/AddToCart';
import RatingProgress from '../rating-progress/RatingProgress';

const Card = ({ data }) => {
  const { id, title, vote_average, poster_path, backdrop_path, overview } = data;

  let slug = '';
  if(title) {
    slug = title.split(' ').join('-').toLowerCase()
  }

  return (
    <div className='flex flex-col w-full sm:max-w-[17rem] group bg-background-color-c dark:bg-foreground-color rounded-xl overflow-hidden'>
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
        className='max-w-full h-60 object-cover grayscale group-hover:grayscale-0 transition-filter duration-300'
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
      <AddToCart id={id} data={data}/>
      </div>
  );
};

export default Card;
