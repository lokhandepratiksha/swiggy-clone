import RestaurantCard from './RestaurantCards';
import { useEffect, useState, useContext } from 'react';
import ShimmerUi from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContex';

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

const { loggedInUser, setUserName } = useContext(UserContext);


  return listOfRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className='body'>
      <div className='filter flex my-4'>
        <div className='searchDiv'>
          <input type="text" placeholder='Search By Name' className='border p-1 ' value={searchText} onChange={(e)=>{
                setSearchText(e.target.value)
                //console.log(e.target.value)
                }
              }/>

            <button  className='px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm' onClick={() => {
              const filter = listOfRestaurants.filter((filterData) => filterData.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurant(filter);
              //console.log(filter);
            }}>Search</button>
        </div>
        <div className='topRatedRestraurant'>
          <button
            className='btn filterBtn px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm'
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
        <div className='user ml-4 flex justify-between'>
           <label for="name" class=" mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John"
            value={loggedInUser}
            onChange={(e)=> setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-wrap flex-row gap-4'>
        {filteredRestraurant?.map((data, index) => (
          <Link to={"/restraurants/" +data.info.id}> <RestaurantCard key={index} restroData={data} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
