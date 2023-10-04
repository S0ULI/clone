import Image from 'next/image';
import Link from 'next/link';

const Card = ({ data }) => {
  const { id, title, vote_average, poster_path, backdrop_path } = data;

  return (
    <Link
      href={`/movie/${id}`}
      className="flex flex-col bg-background-color-c dark:bg-foreground-color  rounded-lg border border-secondary-color w-64 overflow-hidden"
    >
      <Image
        alt={title}
        width={500}
        height={500}
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path || poster_path}`}
      />
      <span>{vote_average}</span>
      <span>{title}</span>
      <button className='bg-dark-background-color-p hover:bg-secondary-color py-2'>Add to Favorites</button>
    </Link>
  );
};

export default Card;
