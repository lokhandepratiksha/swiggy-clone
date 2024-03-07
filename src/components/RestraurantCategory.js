import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems, setShowIndex}) => {
    const handleClick= () => {
        setShowIndex(showItems);
    }
     return (
        <>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 m-auto my-4">
                {/* Accordion header */}
                <div onClick={handleClick} className="cursor-pointer">
                    <h3 className="flex justify-between">
                        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                        <span>⬇️</span>
                    </h3>
                </div>
                {/* Accordion body */}
               { showItems && <ItemList items={data.itemCards}/>}
            </div>
        </>

     )
}
export default RestaurantCategory;