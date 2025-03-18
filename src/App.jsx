import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Products from './pages/Products/Product';
import Home from './pages/Home/Home';
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from 'react';
import logo from '../src/assets/finallogolord.png';

// import './App.css'

function App() {

  const [ loader, setLoader ] = useState(true);

  useEffect(()=>{
    setTimeout(()=> {setLoader(false)},1000);
    console.log(loader);
  },[])
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/", element: <Home/>
        },
        {
          path: "about", element: <About/>
        },
        {
          path: "products", element: <Products/>
        },
        {
          path: "gallery", element: <Gallery/>
        },
        {
          path: "contact", element: <Contact/>
        },

      ]
    }
  ]);

  return (
    <>
      {loader ? 
      (<div className="flex flex-col items-center justify-center h-screen">
        <div
          className="w-48 h-48 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${logo})` }}
        ></div>
        <ClipLoader/>
      </div>
      )
      :(<RouterProvider router={router}/>)}
    </>

  )
}

export default App
