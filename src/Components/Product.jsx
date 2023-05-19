// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({product}) => {

  // const [selected , setSelected] = useState(false)

  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch()

  function addToCart(){
    dispatch(add(product)) 
    toast.success('Added to cart')
    
  }

  function removeFromCart(){
    dispatch(remove(product.id))
    toast.error('Removed from cart')
  }

  // function clickHandler(){
  //   // setSelected(prev => !prev);
  //   selected ?   removeFromCart() : addToCart()
  //   console.log(cart.length)
  //   }



  return (
    <div className="flex flex-col items-center justify-between hover:scale-105 transition-all duration-200 ease-in hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] gap-3 mt-10 p-4 ml-5 rounded-xl border-2 border-gray-400  ">
      <div>
        <p className="text-gray-700 text-lg  font-semibold text-left truncate w-40 mt-1 ">{product.title}</p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left ">{product.description.split(' ').slice(0,10).join(" ") + '...' } </p>
      </div>

      <div className="h-[180px]  ">
        <img className="h-full w-full" src={`${product.image}`} alt="" />
      </div>

    <div className="flex justify-between gap-16 items-center w-full mt-5">

      <div >
        <p className="text-green-600 font-semibold ">${product.price}</p>
      </div>

      {/* <button onClick={clickHandler}>
        {
        selected ? <p>Remove Item</p> : <p>Add to cart</p>
      }
      </button> */}

        {
          cart.some( p => p.id === product.id) ?

          <button className= "text-gray-700 border border-gray-700 rounded-full w-fit font-semibold text-[12px] uppercase p-1 px-3 hover:bg-gray-700 hover:text-white transition-all duration-200 ease-in  " 
          onClick={removeFromCart} >Remove from cart</button> 
          
          :

          <button className="max-w-full text-gray-700 border border-gray-700 w-full rounded-full font-semibold text-[12px] uppercase p-1 px-3 hover:bg-gray-700 hover:text-white  transition-all duration-200 ease-in  "
          onClick={addToCart}>Add to Cart</button>
        }

        </div>
    </div>
  )
};

export default Product;
