import Image from 'next/image';

import SectionWrapper from '@/app/components/layout/SectionWrapper';
import RatingProgress from '@/app/components/rating-progress/RatingProgress';
import AddToCart from './AddToCart';
import { auth } from '@clerk/nextjs';
import { getProductById } from '@/app/lib/products-utils';
import Link from 'next/link';

const page = async ({ params }) => {
  const productId = params.productId;
  const data = await getProductById(productId)
  const {userId} = auth();
  let loged = false;
  if(userId){
    loged = true
  }

  const {
    title,
    image,
    description,
    rate,
    category,
    price
  } = data;

  const categories = category.split(' ');

  return (
    <SectionWrapper mSt="flex flex-col h-full sm:h-screen">
      <div className="flex justify-center bg-background-color-c dark:bg-black/90 w-full p-4 rounded-xl">
        <h1 className="py-2 px-6 truncate rounded-lg text-text-color-dark bg-background-color-p dark:text-dark-nav-list-color-hover dark:bg-dark-background-color-p">{title}</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 sm:flex-row sm:items-start mt-8 mb-8">
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
          src={image}
        />
        <div className="flex flex-col gap-4 w-full sm:min-w-[250px] max-w-lg">
          <div className="flex gap-4">
            <span>
              <RatingProgress rating={rate} />
            </span>
            <span>{rate}</span>
          </div>
          <p className="text-dark-nav-list-color flex flex-col gap-1">
            <span className="dark:text-light-gray-color text-strong-text-color">
              Description: 
            </span>
            {description}
          </p>
          <div className="flex flex-col gap-1 text-sm dark:text-light-gray-color text-strong-text-color">
          </div>
          <div className="flex gap-2">
            {categories.map((cat, index) => (
              <Link
                key={index}
                className="bg-secondary-color py-1 px-2 rounded-xl text-sm"
                href={'/products?category=' + cat}
              >
                {cat}
              </Link>
            ))}
          </div>
          <AddToCart id={productId} data={data} loged={loged} myStyle='mt-6'/>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default page;
