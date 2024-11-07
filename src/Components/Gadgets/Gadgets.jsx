import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);
    const [activeGedgets, setActiveGedets] = useState("All products");

    // console.log("this is product", activeGedgets)

    useEffect( () =>{
        fetch('categoryData.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, []);

    const hendleProductClick = (product) => {
        setActiveGedets(product)
    };

   

    const filteredGadgets = activeGedgets === "All products"
    ? gadgets
    : gadgets.filter((gadget) => gadget.category.toLowerCase() === activeGedgets.toLowerCase());


    
    return (
        <div className="bg-slate-50">

        <div className="container mx-auto  mt-10">
            <h2 className="text-2xl font-bold text-center mb-10 pt-6">Explore Cutting-Edge Gadgets</h2>
          <div className="lg:grid gap-10 grid-cols-4">
            <div className="col-span-1 h-[556px] text-center  w-[240px] border ml-20 ">
                <button className={`btn rounded-full mb-5 mt-5 w-40 ${activeGedgets === "All Product" ? "bg-[#9538E2]" : ""}`} onClick={() => hendleProductClick("All products")} >All Product</button>

                <button className={`btn rounded-full mb-5 mt-5 w-40 ${activeGedgets === "Laptops" ? "bg-[#9538E2]" : ""}`} onClick={() => hendleProductClick("Laptop")}>Laptops</button>

                <button className={`btn rounded-full mb-5 mt-5 w-40 ${activeGedgets === "Iphone" ? "bg-[#9538E2]" : ""}`} onClick={() => hendleProductClick("Iphone")}>Iphone</button>

                <button className={`btn rounded-full mb-5 mt-5 w-40 ${activeGedgets === "Accessories" ? "bg-[#9538E2]" : ""}`} onClick={() => hendleProductClick("Accessories")}>Accessories</button>

                <button className={`btn rounded-full mb-5 mt-5 w-40 ${activeGedgets === "Smart Watches" ? "bg-[#9538E2]" : ""}`} onClick={() => hendleProductClick("Smart Watches")}>Smart Watches</button>

                <button className={`btn rounded-full mb-5 mt-5 w-40 ${activeGedgets === "Mac" ? "bg-[#9538E2]" : ""}`} onClick={() => hendleProductClick("MacBook")}>MacBook</button>
                
            </div>
          <div className="lg:grid grid-cols-3 lg:col-span-3 md:col-span-2">
               

{filteredGadgets.length > 0 ? (
                            filteredGadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id} />)
                        ) : (
                            <p className="text-center text-4xl font-bold">No data found</p>
                        )}
            </div>
          </div>
        </div>
        </div>
    );
};

export default Gadgets;