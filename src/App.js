import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <div >
      <h2>This is header</h2>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/addservice' element={<AddService></AddService>}></Route>
          <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
