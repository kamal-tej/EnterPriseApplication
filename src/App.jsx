import {createBrowserRouter} from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Products from './pages/Products/Product';
import Home from './pages/Home/Home';

// import './App.css'

function App() {
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
    <RouterProvider router={router}/>
  )
}

export default App
