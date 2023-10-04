import Card from './Card';

const Cards = ({data}) => {
  return (
    <div className='flex flex-wrap justify-center sm:justify-between gap-6 w-full'>
      {data.map((card =>{
        return (<Card data={card} key={card.id} />)
      }))}
    </div>
  )
}

export default Cards;