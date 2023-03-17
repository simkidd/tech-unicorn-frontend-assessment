import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = ({grid}) => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    
    

    let componentMounted = true

    useEffect(() => {
        const getProducts = async()=>{
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
                console.log(filter);
            }

            return () => {
                //eslint-disable-next-line
                componentMounted = false;
            }
        }

      getProducts();
    }, [])
    
    const Loading =()=> {
       return (
           <>
       <h1 className='text-[64px] font-bold '>Loading...</h1>
        </>
       )
    }

    const ShowProducts =()=>{
        return(
            <>

            {filter.map((product)=>{
                return(
                    <ProductCard key={product.id} product={product} />
                )
            })}
            </>
        )
    }



    return(
        <div className='grid grid-cols-3 gap-4'>
            {loading ? <Loading /> : <ShowProducts/> }
        </div>
    )
}

export default Products