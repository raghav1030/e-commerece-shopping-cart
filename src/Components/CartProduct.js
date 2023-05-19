import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';
const CartProduct = ({product }) => {


    const diapatch = useDispatch();


    function removeFromCart(){
        diapatch(remove(product.id));
        toast.success('Deleted from Cart');
    }

  return (
    <div className='flex space-x-8 items-center justify-between max-w-[580px] border-b-2 pb-6 border-gray-400 mb-6  '>

        <div className='h-[140px] aspect-square '>
            <img className='w-full h-full' src={product.image} alt="" />
        </div>

        <div className='flex flex-col space-y-12 '>

        <div className='space-y-2 ' >
            <h1 className='text-gray-700 text-lg flex font-semibold text-left  w-[17.5rem] mt-1'>{product.title}</h1>
            <div>
            <p className="w-[17.5rem] text-gray-500 font-normal text-[12px] text-left  ">{product.description.split(' ').slice(0,10).join(" ") + '...' } </p>
            </div>
        </div>
        
        <div className='flex justify-between mr-3 '>

        <div>
            <p className=' text-green-600 font-semibold'>${product.price} </p>
        </div>

        <div className='bg-red-300 justify-center flex items-center rounded-full h-6 w-6 cursor-pointer ' onClick={removeFromCart}>
            <FcDeleteDatabase></FcDeleteDatabase>
        </div>
        </div>

        

        </div>
    </div>
  )
}

export default CartProduct