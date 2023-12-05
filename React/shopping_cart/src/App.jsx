import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Allproducts from './pages/allproducts/AllProducts';

function App() {
  return (
    <MyState>
      
    </MyState>
  );
}

export default App;


// ===================>     User (Protected Route)    <======================

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    return children
  } else {
    return <Navigate to={'/login'} />
  }
}


// ===================>     Admin (Protected Route)    <======================

// eslint-disable-next-line react/prop-types
const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))

  if(admin.user.email === 'pb28.rkt@gmail.com'){
    return children
  }else{
    return <Navigate to={'/login'} />
  }
}