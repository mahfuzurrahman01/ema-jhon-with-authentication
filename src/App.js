
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Main from './Components/Main/Main';
// import Navbar from './Components/Navbar/Navbar';
import Order from './Components/Order/Order';
import { ProductLoader } from './Components/ProductLoader/ProductLoader';
import Review from './Components/Review/Review';
import Shop from './Components/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader:ProductLoader,
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader:ProductLoader,
          element: <Order></Order>
        },
        {
          path: '/review',
          element: <Review></Review>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Shop></Shop> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
