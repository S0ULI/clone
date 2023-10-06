import {BiStar} from 'react-icons/bi'
import {BiSolidStarHalf} from 'react-icons/bi'
import {BiSolidStar} from 'react-icons/bi'

const RatingProgress = ({rating}) => {
    const ratingNum = Number(rating)
    const roundedNum = Math.round(ratingNum * 5) / 10;
    const splitArr = roundedNum.toString().split('.')
    const filledStars = Array(Number(splitArr[0])).fill(1)
    const halfStar = Number(splitArr[1]) >= 5 ? 1 : 0;
    const emptyStars = Array(5 - (filledStars.length + halfStar)).fill(1)    
    
    return (
    <div className='flex gap-1 text-2xl text-secondary-color'>
        {
            filledStars.map((star, index) => <BiSolidStar key={index}/>)
        }
        {
            halfStar == 1 ? <BiSolidStarHalf/> : null
        }
        {
            emptyStars.map((star, index) => <BiStar key={index}/>)
        }
    </div>
  );
};

export default RatingProgress;
