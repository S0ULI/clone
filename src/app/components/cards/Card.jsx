import Image from 'next/image';
import Link from 'next/link';

const Card = ({ data }) => {
  const { id, title, vote_average, poster_path, backdrop_path } = data;

  return (
    <Link
      href={`/movie/${id}`}
      className="flex flex-col bg-background-color-c dark:bg-foreground-color  rounded-xl w-64 overflow-hidden"
    >
      <Image
        alt={title}
        width={500}
        height={500}
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path || poster_path}`}
      />
      <div className='flex flex-col gap-4 p-4'>
      <span className='bg-primary-color p-2 rounded-full text-center'>{vote_average}</span>
      <h3><span>Title : </span><span className='text-dark-gray-color'>{title}</span></h3>
      </div>
      <button className='bg-shop-button-color dark:bg-background-color-c dark:text-text-color-dark hover:bg-secondary-color dark:hover:bg-secondary-color  py-4 text-background-color-c rounded-xl transition-all duration-300'>Add to Favorites</button>
    </Link>
  );
};

export default Card;
