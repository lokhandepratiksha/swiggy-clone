import { CDN_LINK } from '../utils/constants';

const RestaurantCard = (props) => {
  const { restroData } = props;
  console.log(restroData.info.id);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = restroData.info;

  return (
    <div className='bg-gray-300 w-48 p-4'>
      <div className=''>
        <img className='w-full' src={CDN_LINK + cloudinaryImageId} alt='' />
      </div>
      <h3>{name}</h3>
      <p>{cuisines.join(',')}</p>
      <p>{avgRating} star</p>
      <p>{costForTwo} </p>
      <p>{deliveryTime} Mins</p>
    </div>
  );
};

export default RestaurantCard;
