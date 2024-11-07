import React, { useEffect, useState } from 'react';
import { useLoaderData  } from 'react-router-dom';
import { getStoredAdd } from '../Utility/addToDB';
// import Gadget from '../Gadget/Gadget';
import ProductCart from '../ProductCart/ProductCart';




const DashboardDetails = () => {
    const [details, setDetails] = useState([])
    console.log("details check", details)
   
    const allDetails = useLoaderData();

    console.log("all details", allDetails)

    const filteredDetails = allDetails.filter((product) =>
    details.includes(product.product_id)
);

console.log("filter details", filteredDetails)

    useEffect( () => {
        const storedAdd = getStoredAdd();
       
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
        <h1 className='text-2xl font-bold py-10'> cart</h1>
        {
            filteredDetails.map(gadget => <ProductCart gadget={gadget} key={gadget.product_id}></ProductCart>)
        }
        </div>
        
    );
};

export default DashboardDetails;