import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartProduct from '../Components/CartProduct'
import { useEffect, useState } from 'react'

const Cart = () => {
  const { cart } = useSelector((state) => state)

  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  console.log(totalAmount)
  console.log(cart)

  return (
    <div className="w-screen h-[80vh]  flex justify-center space-x-12 mt-4  relative ">
      <>
        {cart.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-24    ">
            <h1 className="text-4xl  ">Nothing in Cart</h1>

            <NavLink to="/">
              <button className="bg-green-700 text-white rounded-md w-[12rem] h-[2.2rem] uppercase ">
                Shop Now
              </button>
            </NavLink>
          </div>
        ) : (
          <div classNamme="w-6/12 mx-auto   ">
            {cart.map((product, index) => {
              return <CartProduct key={index} product={product}></CartProduct>
            })}
          </div>
        )}
      </>

      <div className="flex flex-col justify-between    ">
        <div className="w-full uppercase pt-8 pl-5 ">
          <div className="text-green-700 font-semibold">Your Cart</div>
          <div className="text-green-700 font-bold text-4xl">Summary</div>
          <p className="text-md text-slate-900 font-semibold capitalize mt-3 ">
            Total Items: {cart.length}{' '}
          </p>
        </div>

        <div className="pl-5 space-y-4">
          <div className="text-md text-slate-900 font-semibold capitalize">
            Total Amount {totalAmount}{' '}
          </div>
          {cart.length > 0 && (
            <NavLink to={'/'}>
              <button className="bg-green-700 text-white rounded-md w-[12rem] h-[2.2rem] uppercase  ">
                Checkout Now
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
