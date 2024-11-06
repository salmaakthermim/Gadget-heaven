import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect( () =>{
        fetch('categoryData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center">Explore Cutting-Edge Gadgets</h2>
          <div className="lg:grid gap-10 grid-cols-4">
            <div className="col-span-1 h-[556px] text-center  w-[240px] border ml-20 ">
                <button className="btn rounded-full mb-5 mt-5 w-40 ">All Product</button>
                <button className="btn rounded-full mb-5 w-40 ">Accessories</button>
                <button className="btn rounded-full mb-5 w-40 ">Accessories</button>
                <button className="btn rounded-full mb-5 w-40 ">Accessories</button>
                <button className="btn rounded-full mb-5 w-40 ">Accessories</button>
                <button className="btn rounded-full w-40 ">Accessories</button>
                
            </div>
          <div className="lg:grid grid-cols-3 lg:col-span-3 md:col-span-2">
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
            </div>
          </div>
        </div>
    );
};

export default Gadgets;