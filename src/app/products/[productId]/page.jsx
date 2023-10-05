import Image from 'next/image';

import SectionWrapper from '@/app/components/layout/SectionWrapper';
import { getProductById } from '../../lib/products-util';

const page = async ({ params }) => {
  const productId = params.productId;
  const data = await getProductById(productId);

  const { title, release_date, poster_path, backdrop_path, overview } = data;

  // getting only the year release
  const yearHandler = (date) => {
    const newDate = date.split('-');
    return `(${newDate[0]})`;
  };

  return (
    <div>
      <SectionWrapper mst="flex flex-col">
        <div className="flex justify-center bg-background-color-c dark:bg-black/90 w-full p-4 rounded-xl">
          <h1 className="py-2 px-6 truncate rounded-lg text-text-color-dark bg-background-color-p dark:text-dark-nav-list-color-hover dark:bg-dark-background-color-p">{`${title} ${yearHandler(
            release_date
          )}`}</h1>
        </div>
        <div className='mt-8 flex flex-col sm:flex-row justify-center gap-6'>
          <div className="overflow-hidden rounded-xl w-fit">
            <Image
              alt={title}
              width={500}
              height={282}
              placeholder="blur"
              blurDataURL="/spinner.svg"
              // style={{
              //   width: '100%',
              //   height: '152px',
              // }}
              src={`https://image.tmdb.org/t/p/w500/${
                poster_path || backdrop_path
              }`}
            />
          </div>
          <div>
              <p>{overview}</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default page;
