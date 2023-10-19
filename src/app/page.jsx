import Slider from './components/slider/Slider';
import SliderParallax from './components/slider/SliderParallax';
import { getAllProducts } from './lib/products-utils';
// import { getAllProducts } from './lib/products-util';

export default async function Home() {
  // const popular = await getAllProducts('popular')
  // const top = await getAllProducts('top_rated')
  // const coming = await getAllProducts('upcoming')
  const jackets = await getAllProducts('jacket')
  const shirts = await getAllProducts('shirt')
  const pants = await getAllProducts('pants')
  return (
    <div className='w-full flex flex-col flex-start gap-8'>
      <SliderParallax/>
      <div className='flex flex-col gap-10'>
      <Slider category='jacket' title='Jackets' cards={jackets}/>
      <Slider category='shirt' title='Shirts' cards={shirts}/>
      <Slider category='pants' title='Pants' cards={pants}/>
      </div>
    </div>
  );
}
