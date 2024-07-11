import './App.css';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Main/Home';
import ProductDetail from './Components/Main/ProductDetail';
import AllProduct from './Components/Main/AllProduct/AllProduct';
import Login from './Components/Main/startPage/Login';
import SignUp from './Components/Main/startPage/SignUp';
import Cart from './Components/Main/Cart';
import ProtectedRoute from './Hooks/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/product/:name/:id' element={<ProductDetail />}></Route>
          <Route exact path='/AllProduct' element={<AllProduct />}></Route>
          <Route exact path='/cart' element={<ProtectedRoute component={Cart}/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
