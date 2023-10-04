import Image from 'next/image';
import Link from 'next/link';

const Card = ({ data }) => {
  const { id, title, vote_average, poster_path, backdrop_path } = data;

  const limitTitleHandler = (givenTitle, limit) => {
    let newTitle = '';

    if (givenTitle.length > limit) {
      for (let i = 0; i < limit; i++) {
        newTitle += givenTitle[i];
      }
      newTitle += '...';
      return newTitle;
    } else return givenTitle;
  };

  return (
    <Link
      href={`/movie/${id}`}
      className="flex flex-col w-full sm:max-w-[17rem] bg-background-color-c dark:bg-foreground-color  rounded-xl overflow-hidden hover:-translate-y-2 opacity-90 hover:opacity-100 transition-all duration-300"
    >
      <Image
        alt={title}
        width={600}
        height={500}
        src={`https://image.tmdb.org/t/p/w500/${backdrop_path || poster_path}`}
      />
      <div className="flex flex-col items-center text-center gap-4 py-4 px-4">
        <h3 className="bg-background-color-p dark:bg-dark-background-color-p text-dark-gray-color dark:text-light-gray-color p-2 rounded-full w-full">
          {limitTitleHandler(title, 24)}
        </h3>
        <span>{vote_average}</span>
      </div>
      <button className="hover:bg-shop-button-color bg-secondary-color/80 dark:hover:bg-background-color-c dark:text-text-color-dark  dark:bg-cyan-600  py-4 text-background-color-c rounded-xl transition-all duration-300">
        Add to Favorites
      </button>
    </Link>
  );
};

export default Card;
