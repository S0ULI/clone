import CartCard from './CartCard';

const CartCards = ({data}) => {
  return (
    <div className='flex flex-wrap justify-center sm:justify-center gap-6 w-full'>
      {data.map((card =>{
        return (<CartCard data={card} key={card.id} />)
      }))}
    </div>
  )
}

export default CartCards;