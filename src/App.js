import React, { Suspense, lazy, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestraurantMenu from './components/RestraurantMenu';
// import Grocery from './components/Grocery';
import UserContext from './utils/UserContex';

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=>{
    //make an API call set UserName and Passowrd
    const data = {
        name : 'Pratiksha Lokhande',
    }
    setUserName(data.name);
  },[])

  return (
   <UserContext.Provider value={{loggedInUser : userName ,setUserName}}>
      <div className='app'>
              <Header />
          <Outlet/>
     </div>
   </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element : <AppLayout/>,
    children : [
      {
        path : '/',
        element : <Body/>
      },
      {
        path:'/about',
        element: <About/>,
      },
      {
        path :'/contact',
        element : <Contact/>,
      },
      {
        path :'/grocery',
        element : <Suspense fallback={<h1>Loading...</h1>}> <Grocery/> </Suspense>,
      },
      {
        path : '/restraurants/:restId',
        element : <RestraurantMenu/>
      }
    ],
    errorElement : <Error/>
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider  router={appRouter}/>);
