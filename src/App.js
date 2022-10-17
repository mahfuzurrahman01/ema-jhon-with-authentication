
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
// import Navbar from './Components/Navbar/Navbar';
import Order from './Components/Order/Order';
import Private from './Components/PrivateRoute/Private';
import { ProductLoader } from './Components/ProductLoader/ProductLoader';
import Registration from './Components/Registration/Registration';
import Review from './Components/Review/Review';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ProductLoader,
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/shipping',
          element: <Private><Shipping></Shipping></Private>
        },
        {
          path: '/order',
          loader: ProductLoader,
          element: <Order></Order>
        },
        {
          path: '/review',
          element: <Review></Review>
        },
        {
          path: '/inventory',
          element: <Private><Inventory></Inventory></Private>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Registration></Registration>
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
