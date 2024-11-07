import React from 'react';


const ProductCart = ({ gadget }) => {
  const { product_image, product_title, description, price } = gadget;

  return (
    <div className='flex border  items-center mb-5 text-center'>
      <div>
      <figure className="px-10 pt-10">
          <img
            src={product_image}
            className="rounded-xl" />
        </figure>
      </div>
      <div className="">
       
        <div className="card-body ">
          <h2 className="card-title">{ product_title}</h2>
          <p>{description}</p>
          <p className='mr-96 font-bold'>price: ${price}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
