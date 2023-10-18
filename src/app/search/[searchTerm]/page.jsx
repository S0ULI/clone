import Cards from '@/app/components/cards/Cards';
import SectionWrapper from '@/app/components/layout/SectionWrapper';
import { getProductsBySearch } from '@/app/lib/products-utils';
// import Pagination from '@/app/components/pagination/Pagination';

const SearchPage = async ({ params }) => {

  const res = await getProductsBySearch(params.searchTerm);

  return (
    <SectionWrapper>
      { res && res.length === 0 && (
        <div className='w-full h-screen flex justify-center items-center'>
          <h2 className='text-xl'>No Results Found</h2>
        </div>
        )
      }
    {res && <Cards data={res}/>}
    </SectionWrapper>
  );
};

export default SearchPage;
