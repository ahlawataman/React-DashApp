import './app.css'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import ProtectedRoutes from './pages/protectedRoutes/ProtectedRoutes'


function App() {

  return (
    <Router basename='/'>

    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route element={<ProtectedRoutes/>}>

        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/users' element={<UserList/>} />
        <Route path='/user/:userId' element={<User/>} />
        <Route path='/newuser' element={<NewUser/>} />
        <Route path='/products' element={<ProductList/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/newproduct' element={<NewProduct/>} />
        
      </Route>
    </Routes>
    
    </Router>
  );
}

export default App;
