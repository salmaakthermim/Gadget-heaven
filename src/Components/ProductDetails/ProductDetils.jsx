import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { addToStored } from '../Utility/addToDB';


const ProductDetils = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const gadget = data.find(gadget => gadget.product_id === product_id);
   
    const { product_id: currentId, product_image, product_title, description, price, specification, rating } = gadget;

    const handleAddToCard = (product_id) =>{


        addToStored(product_id);

    }



    return (
        <div>
            <div className='text-center container mx-auto relative top-20 py-10 h-60 bg-[#9538E2] text-white rounded-3xl'>
                <h1 className='text-3xl font-bold'>Product Details</h1>
                <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="hero bg-white rounded-3xl  container border mx-auto relative z-20 p-5 lg:w-[1000px] " >
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="rounded-lg w-80 h-[300px] " />
                    <div>
                        <h1 className="text-3xl font-bold">{product_title}</h1>
                        <p className="py-4">
                            Price:${price}
                        </p>
                        <button className='mb-3 px-6 bg-lime-100 py-1 rounded-full  text-[#309C08]'>In stock</button>
                        <p className='mb-3 text-gray-400'>{description}</p>
                        <p className='font-bold'>Specification:</p>
                        <ol className='text-gray-400'>
                            {
                                specification.map(specification => <li>{specification}</li>)
                            }
                        </ol>
                        <p className='font-bold'>Rating</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                          <button className=' ml-4 bg-gray-200 px-2 rounded-lg '>{rating}</button>

                        </div>
                        <br />
                        <div className='flex gap-5 text-center'>
                        <button onClick={() => handleAddToCard(product_id)}  className='px-9 py-2 rounded-3xl mt-4 bg-[#9538E2] flex gap-4 items-center text-white'>Add To card <AiOutlineShoppingCart /></button>
                        <p  className='border p-3 text-2xl bg-white text-black rounded-full'><IoIosHeartEmpty /></p>
                        </div>

                       
                    </div>
                  
                </div>
              
            </div>
          
        </div>
    );
};

export default ProductDetils;