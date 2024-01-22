import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const[onlineStatus, setOnlineStatus] = useState(true);

    //check if online return online status - return boolean value
   useEffect(() => {
     window.addEventListener("offline", () => {
        setOnlineStatus(false);
     })

     window.addEventListener("online",()=>{
        setOnlineStatus(true);
     })
   }, []);

   return onlineStatus;
}

export default useOnlineStatus;