import React, { useEffect, useState } from 'react';
import { useLoaderData  } from 'react-router-dom';
import { getStoredAdd } from '../Utility/addToDB';
// import Gadget from '../Gadget/Gadget';
import ProductCart from '../ProductCart/ProductCart';




const DashboardDetails = () => {
    const [details, setDetails] = useState([])
   
    const allDetails = useLoaderData();

    useEffect( () => {
        const storedAdd = getStoredAdd();
        // const storedAddInt = storedAdd.map(product_id => parseInt(product_id)); 
        console.log(storedAdd,  allDetails)

        

        setDetails(storedAdd);
    }, []) 
    return (
        <div>
        <div className='text-center py-10 bg-[#9538E2] text-white mb-3'>
            <h1 className=' text-2xl font-bold mb-3'>Dashboard</h1>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
            <div className='mt-4 items-center justify-center flex gap-5'>
                <button  className='px-5 py-1 rounded-full border hover bg-white text-[#9538E2]'>Cart</button>
                <button  className='px-5 py-1 rounded-full border'>Wishlist</button>
            </div>
        </div>
        <h1> cart: {details.length}</h1>
        {
            details.map(gadget => <ProductCart gadget={gadget} key={gadget.product_id}></ProductCart>)
        }
        </div>
        
    );
};

export default DashboardDetails;