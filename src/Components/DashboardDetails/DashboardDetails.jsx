// import React, { useEffect } from 'react';
import { useLoaderData, useParams,  } from 'react-router-dom';
import { addToStored, addToStoredWishList, getStoredAdd } from '../Utility/addToDB';


// const { product_id} = DashboardDetails;
const DashboardDetails = () => {
    const { product_id } = useParams();
    const data = useLoaderData();
    const id = parseInt(product_id)

    // console.log(typeof product_id, typeof data, typeof id, typeof data[0].product_id)

    const gadget = data.find(gadget => gadget.product_id === product_id);
    // console.log(data, gadget, id)
    // const { product_id: currentId, product_image, product_title, description, price, specification, rating } = gadget;

    const handleAddToCard = (product_id) =>{


        addToStored(product_id);

    }
    const hendleToWishList = (product_id) =>{
        addToStoredWishList(product_id);
    }
    // const allDetails = useLoaderData();

    // useEffect( () => {
    //     const storedAdd = getStoredAdd();
    //     const storedAddInt = storedAdd.map(product_id => parseInt(product_id)); 
    //     console.log(storedAdd, storedAddInt, allDetails)
    // }, []) 
    return (
        <div className='text-center py-10 bg-[#9538E2] text-white mb-3'>
            <h1 className=' text-2xl font-bold mb-3'>Dashboard</h1>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
            <div className='mt-4 items-center justify-center flex gap-5'>
                <button onClick={() => handleAddToCard(product_id)} className='px-5 py-1 rounded-full border hover bg-white text-[#9538E2]'>Cart</button>
                <button onClick={() => hendleToWishList(product_id)} className='px-5 py-1 rounded-full border'>Wishlist</button>
            </div>
        </div>
    );
};

export default DashboardDetails;