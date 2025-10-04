import React from 'react'
import { Params } from 'next/dist/server/request/params';
import { ProducrI } from '@/interfaces/product';
import AllProducts from '@/components/AllProducts/AllProducts';


export default async function SpecificBrand({params}: {params : Params}) {
  const {brandId} = await params;
  

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?brand=${brandId}`);
    const {data : products} : {data : ProducrI[]}= await response.json();
    
   
  return <>
  
  <AllProducts products={products}/>
  
  </>
}
