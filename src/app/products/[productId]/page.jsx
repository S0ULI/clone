import Image from 'next/image';

import SectionWrapper from '@/app/components/layout/SectionWrapper';
import { getProductById } from '../../lib/products-util';
import RatingProgress from '@/app/components/rating-progress/RatingProgress';

const page = async ({ params }) => {
  const productId = params.productId;
  const data = await getProductById(productId);

  const {
    title,
    release_date,
    poster_path,
    backdrop_path,
    overview,
    vote_average,
    tagline,
    genres,
    budget,
    revenue,
    original_language,
    original_title
  } = data;

  // getting only the year release
  const yearHandler = (date) => {
    const newDate = date.split('-');
    return `(${newDate[0]})`;
  };

  return (
    <SectionWrapper mSt="flex flex-col h-full sm:h-screen">
      <div className="flex justify-center bg-background-color-c dark:bg-black/90 w-full p-4 rounded-xl">
        <h1 className="py-2 px-6 truncate rounded-lg text-text-color-dark bg-background-color-p dark:text-dark-nav-list-color-hover dark:bg-dark-background-color-p">{`${title} ${yearHandler(
          release_date
        )}`}</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 sm:flex-row sm:items-start mt-8">
        <Image
          alt={title}
          width={500}
          height={282}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            maxHeight: '70vh',
            width: '100%',
            maxWidth: '400px',
            objectFit: 'cover',
            borderRadius: '0.75rem',
          }}
          src={`https://image.tmdb.org/t/p/w500/${
            poster_path || backdrop_path
          }`}
        />
        <div className="flex flex-col gap-4 w-full sm:min-w-[250px] max-w-lg">
          <h2 className="text-xl">{`" ${original_title}: ${tagline || `This is ${title}`} "`}</h2>
          <div className="flex gap-4">
            <span>
              <RatingProgress rating={vote_average} />
            </span>
            <span>{vote_average}</span>
          </div>
          <p className="text-dark-nav-list-color flex flex-col gap-1">
            <span className="dark:text-light-gray-color text-strong-text-color">
              Description: 
            </span>
            {overview}
          </p>
          <div className="flex flex-col gap-1 text-sm dark:text-light-gray-color text-strong-text-color">
            <div>
              <span>Budget: </span>
              <span className="text-dark-nav-list-color">{budget}</span>
            </div>
            <div>
              <span>Revenue: </span>
              <span className="text-dark-nav-list-color">{revenue}</span>
            </div>
            <div>
              <span>Original Language: </span>
              <span className="text-dark-nav-list-color">
                {original_language}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            {genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-secondary-color py-1 px-2 rounded-xl text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
