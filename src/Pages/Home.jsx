import { useEffect, useState } from "react";
import Product from '../Components/Product';
import Loader from "../Components/Loader";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading , setLoading] = useState(false)
  const [products , setProducts] = useState([])

  async function fetchProductData(){
    setLoading(true)
    
    
    try{
      const call = await fetch(API_URL)
      const data = await call.json()
      setProducts(data)
      console.log(data)
    }

    catch(e){
      console.log('Error occured in fetching API ' , e);
      setProducts([])
    }
    setLoading(false)
  }


  useEffect(()=>{
    fetchProductData()
  } , [])

  return(
    <div className="relative">
      {
        loading ? (<div className="w-screen h-screen flex justify-center absolute items-center"> <Loader></Loader> </div>) : 
        <div className="grid w-full xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2  mx-auto space-y-10 space-x-5 min-h-[80vh] " >{
        (Product.length > 0 ? 
        (
          products.map( product => {
            return <Product key={product.id} product={product} ></Product>
        })
        )

        : (<div className="text-center  font-bold text-3xl  " >We are Stocked Out </div>))
      }</div>
      }
    </div>
  )
};

export default Home;
