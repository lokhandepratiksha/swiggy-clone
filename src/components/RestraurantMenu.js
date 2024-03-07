import React , {useState} from 'react';
import ShimmerUi from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import RestaurantCategory from './RestraurantCategory';


const RestraurantMenu = () => {

   const { restId } = useParams();
   const resInfo = useRestrauntMenu(restId);

   const [showIndex, setShowIndex] = useState(0);

   if (resInfo === null) {
      return <ShimmerUi />;
   }

   const { name, city, avgRatingString, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
   const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

   const categories = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter( c=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   //console.log(categories)

   return (
         <>
            <div className='md:container md:mx-auto'>
               <div className='menu text-center'>
                  <h1 className='font-bold my-6 text-2xl'>{name}</h1>
                  <p className='font-medium'>{cuisines.join(" ")} - {costForTwoMessage}</p>
                  <p className='font-medium'>{city} {avgRatingString}</p>
                  <h2>Menu</h2>
                  <ul>
                     <li>{cuisines.join(" ,")}</li>
                  </ul>
               </div>

               {/* categories Accordion */}
               <div className='recommented'>
               {categories.map((category, index)=> {
                  return(
                     //Controlled Component
                     <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
                     showItems={index === showIndex ? true : false }
                     setShowIndex = {() =>{setShowIndex(index)}}/>
                  )
               })}
               </div>
            </div>
         </>
      )

}

export default RestraurantMenu;