import SectionWrapper from './components/layout/SectionWrapper';
import Slider from './components/slider/Slider';
import SliderParallax from './components/slider/SliderParallax';
import { getAllProducts } from './lib/products-util';

export default async function Home() {
  const popular = await getAllProducts('popular')
  const top = await getAllProducts('top_rated')
  const coming = await getAllProducts('upcoming')
  return (
    <div className='w-full flex flex-col flex-start gap-4'>
      <SliderParallax/>
      <Slider sort='popular' title='Popular' cards={popular.results}/>
      <Slider sort='upcoming' title='Upcoming' cards={coming.results}/>
      <Slider sort='top_rated' title='Top Rated' cards={top.results}/>
    </div>
  );
}
