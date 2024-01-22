import { useEffect, useState } from "react";

const useRestrauntMenu = (restId) =>{
  const[resInfo, setResInfo] = useState(null);

    //fetchData
   useEffect(()=>{
      fetchData();
   },[]);

   const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId="+restId+"&catalog_qa=undefined&submitAction=ENTER");
        const json =  await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestrauntMenu;