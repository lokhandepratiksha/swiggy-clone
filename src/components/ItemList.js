import { CDN_LINK } from "../utils/constants";

const ItemList = ({items}) => {
    return (
          <div>
            {items.map((item)=>{
                return(
                    <>
                        <div key={item.card.info.id} className="border-b-2 my-6">
                            <div className="flex justify-between py-2.5">
                                <div className="w-9/12">
                                   <h6 className="font-bold text-sm">{item.card?.info?.name}</h6>
                                    <p>₹{item.card.info.price/100}</p>
                                    <p className="text-sm">{item.card.info.description}</p>
                                </div>
                                <div className="relative w-28 w-3/12 rounded-md">
                                    <button className="absolute px-4 py-2 font-semibold text-sm bg-white text-black shadow-lg rounded-md shadow-sm opacity-100 inset-x-0 bottom-0 w-28 m-auto">Add +</button>
                                    <img  src={CDN_LINK + item.card.info.imageId} className="rounded-md h-32 w-full" />
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
          </div>
    )
}
export default ItemList;