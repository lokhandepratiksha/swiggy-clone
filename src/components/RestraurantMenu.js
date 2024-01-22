import React from 'react';
import ShimmerUi from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';


const RestraurantMenu = () => {
  
   const { restId } = useParams();
   const resInfo = useRestrauntMenu(restId);

   if (resInfo === null) {
      return <ShimmerUi />;
   }

 const { name, city, avgRatingString, cuisines } = resInfo?.cards[0]?.card?.card?.info;
 const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

//console.log (itemCards)
return (
   <>
     <div className='menu'>
       <h1>{name}</h1>
        <p>{city}</p>
         <p>{avgRatingString}</p>
       <h2>Menu</h2>
       <ul>
         <li>{cuisines.join(" ,")}</li>
       </ul>
     </div>

   
     <div className='recommented'>
     <h3>Recommented</h3>
      <ul>
         {itemCards.map((items, index) => {
            return (
               <li key={index}>{items.card.info.name} -- Rs. {items.card.info.price/100}</li>
            )
         })}
      </ul>
     </div>
   
   </>
   
   )

}

export default RestraurantMenu;