import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductDetils = () => {
    const {product_id} = useParams();

    const data = useLoaderData();
    const id = parseInt(product_id)
    // console.log(typeof product_id, typeof id,  typeof +data[0].product_id)
    const gadget = +data.find(gadget => gadget.product_id === id);
    // console.log(gadget)
    const {product_id:currentId, product_image} = gadget;

    // console.log(product_id)
    return (
        <div>
            <h2>Product detils : {product_id}</h2>
            
            <img src={product_image} alt="" />
        </div>
    );
};

export default ProductDetils;