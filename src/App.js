
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import SocialLogin from './Pages/Authentication/SocialLogin/SocialLogin';
import Header from './Pages/Header/Header';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import CheakOut from './Pages/CheakOut/CheakOut';
import Order from './Pages/Order/Order';
import Footer from './Pages/Footer/Footer'
import About from './Pages/About/About';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/social' element={<SocialLogin></SocialLogin>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/cheakout/:productId' element={
          <RequireAuth>
            <CheakOut></CheakOut>
          </RequireAuth>
        }></Route>
        <Route path='/manageService' element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }></Route>
        <Route path='/order' element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
