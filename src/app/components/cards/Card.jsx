import Image from 'next/image';
import Link from 'next/link';

import AddToCart from '@/app/products/[productId]/AddToCart';
import RatingProgress from '../rating-progress/RatingProgress';

const Card = ({ data }) => {
  const { id, title, slug, rate, image, description } = data;

  return (
    <div className='flex flex-col w-5/6 sm:w-[17rem] group bg-background-color-c dark:bg-foreground-color rounded-xl overflow-hidden select-none'>
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
        className='max-w-full h-[19rem] sm:h-60 object-cover grayscale group-hover:grayscale-0 transition-filter duration-300'
        src={image || '/logo.svg'}
      />
      <div className="flex flex-col items-center text-center gap-4 p-4">
        <h3 className="truncate bg-background-color-p dark:bg-dark-background-color-p text-dark-gray-color dark:text-light-gray-color py-2 px-4 rounded-full w-full">
          {title || 'No Title'}
        </h3>
        <span>
          <RatingProgress rating={rate || 0}/>
        </span>
        <p className="line-clamp-2 px-1 text-dark-gray-color/70">
          {description ? description : '! There are no Description For this movie yet !'}
        </p>
      </div>
    </Link>
      <AddToCart id={id} data={data}/>
      </div>
  );
};

export default Card;
