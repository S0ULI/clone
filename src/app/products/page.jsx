import SectionWrapper from '../components/layout/SectionWrapper';
// import Pagination from '../components/pagination/Pagination';
import SideBar from '../components/sidebar/Sidebar';
import Cards from '../components/cards/Cards';
import { getAllProducts } from '../lib/products-utils';
// import { getAllProducts } from '../lib/products-util';

const ProductPage = async ({ searchParams }) => {
  const category = searchParams.category;
  // const page = searchParams.page;

  // const data = await getAllProducts(sort, page);
  const data = await getAllProducts(category)

  return (
    <SectionWrapper mSt={'flex gap-6 justify-between'}>
      <div className='w-full flex flex-col gap-8'>
      <SideBar />
        <Cards data={data} />
      {/* <Pagination currentPage={data.page} totalPages={data.total_pages} sort={searchParams.sort}  /> */}
      </div>
    </SectionWrapper>
  );
};

export default ProductPage;
