import Navbar from './Components/Navbar'
import { Route , Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart'





const App = () => {
  return(
    <div>
      <div className='bg-slate-900 relative  '>
      <Navbar></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart></Cart>} ></Route>
      </Routes>
    </div>
  ) ;
};

export default App;
