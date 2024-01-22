import RestaurantCard from './RestaurantCards';
import { useEffect, useState } from 'react';
import ShimmerUi from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const[filteredRestraurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setlistOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
    return (
      <h1>Looks like you're offline ! Please check your internet</h1>
    )

  return listOfRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className='body'>
      <div className='filter'>
        <input type="text" placeholder='Search By Name' value={searchText} onChange={(e)=>{
             setSearchText(e.target.value)
            //console.log(e.target.value)
            }
          }/>

        <button onClick={() => {
          const filter = listOfRestaurants.filter((filterData) => filterData.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurant(filter);
          console.log(filter);
        }}>Search</button>
        
        <button
          className='btn filterBtn'
          onClick={() => {
            //filter logic
            const filteredListOfRestaurants = listOfRestaurants?.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className='flex flex-wrap flex-row gap-4'>
        {filteredRestraurant?.map((data, index) => (
          // console.log(data.info.id)

          <Link to={"/restraurants/" +data.info.id}> <RestaurantCard key={index} restroData={data} /></Link>
        
        ))}
      </div>
    </div>
  );
};

export default Body;
