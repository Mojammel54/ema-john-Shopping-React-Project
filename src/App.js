
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop'
import Orders from './components/Orders/Orders';
import Inventory from './components/inventory/Inventory';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import Login from './components/Login/Login';
import SignUp from './components/signup/SignUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoutes from './components/routes/PrivateRoutes';
const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [

      {
        path: '/',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>


      },
      {

        path: '/orders',
        loader: productsAndCartLoader,
        element: < Orders></Orders >

      },
      {


        path: '/inventory',
        element: <PrivateRoutes> <Inventory></Inventory></PrivateRoutes>
      },
      {


        path: '/shipping',
        element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },



    ]
  },






])

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
