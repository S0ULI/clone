import Cards from '@/app/components/cards/Cards';
import SectionWrapper from '@/app/components/layout/SectionWrapper';
// import Pagination from '@/app/components/pagination/Pagination';
import { getProductBySearch } from '@/app/lib/products-util';

const SearchPage = async ({ params }) => {
  const data = await getProductBySearch(params.searchTerm);
  const res = data.results;

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
