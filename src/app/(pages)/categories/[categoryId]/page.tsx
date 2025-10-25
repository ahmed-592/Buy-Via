import React from 'react'
import { Params } from 'next/dist/server/request/params';

import AllProducts from '@/components/AllProducts/AllProducts';
import { ProducrI } from '@/interfaces/product';

export default async function CategoryId({params} : {params : Params}) {
 const {categoryId} = await params;
   

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`);
    const {data : products} : {data : ProducrI[]}= await response.json();
    
   
  return <>
  
  <AllProducts products={products}/>
  
  </>
}




