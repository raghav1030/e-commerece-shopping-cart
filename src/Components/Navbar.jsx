import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart} = useSelector((state) => state)

  return (
    <div>
      <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto '>
        <div className='ml-5 '>

        <NavLink to='/'>

        <img className='h-14' src='../logo.png' alt="" />
        </NavLink>

        </div>
        
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        <NavLink to='/'>
          <p>Home</p>
          </NavLink>

          <NavLink to='/cart'>
          <span className='relative '> <FaShoppingCart className='text-2xl' />
          {cart.length > 0 &&
          <span className='absolute -top-1 -right-2 bg-green-600 text-xs h-5 w-5 flex justify-center items-center animate-bounce rounded-full text-white ' >
              <span className='absolute '>
              {cart.length}

              </span>
              </span> }
              
            </span>
        </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
