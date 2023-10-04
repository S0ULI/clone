import SectionWrapper from '../components/SectionWrapper';
import Pagination from '../components/pagination/Pagination';
import SideBar from '../components/sidebar/Sidebar';
import { getAllProducts } from '../lib/products-util';

const ProductPage = async ({ searchParams }) => {
  const sort = searchParams.sort;
  const page = searchParams.page;

  const data = await getAllProducts(sort, page);

  return (
    <SectionWrapper styles={'flex gap-6 justify-between'}>
      <div>
        <h1 className="">Product Page</h1>
      <Pagination currentPage={data.page} sort={searchParams.sort}  />
      </div>
      <SideBar />
    </SectionWrapper>
  );
};

export default ProductPage;
