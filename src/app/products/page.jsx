import SectionWrapper from '../components/SectionWrapper';
import SideBar from '../components/sidebar/Sidebar';

const ProductPage = () => {
  return (
    <SectionWrapper styles={'flex gap-6 justify-between'}>
      <div>
        <h1 className="">Product Page</h1>
      </div>
      <SideBar />
    </SectionWrapper>
  );
};

export default ProductPage;
