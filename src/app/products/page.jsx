import SectionWrapper from '../components/SectionWrapper';
import Pagination from '../components/pagination/Pagination';
import SideBar from '../components/sidebar/Sidebar';
import Cards from '../components/cards/Cards';
import { getAllProducts } from '../lib/products-util';

const ProductPage = async ({ searchParams }) => {
  const sort = searchParams.sort;
  const page = searchParams.page;

  const data = await getAllProducts(sort, page);

  return (
    <SectionWrapper styles={'flex gap-6 justify-between'}>
      <div className='w-full flex flex-col gap-8'>
        {/* <h1 className="text-2xl font-semibold text-primary-color">Movies</h1> */}
        <Cards data={data.results} />
      <Pagination currentPage={data.page} sort={searchParams.sort}  />
      </div>
      <SideBar />
    </SectionWrapper>
  );
};

export default ProductPage;
