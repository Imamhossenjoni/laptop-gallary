import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <h2>This is header</h2>
      <Header></Header>
      <Products></Products>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
