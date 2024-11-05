import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_image, product_title, price, product_id } = gadget;
    return (
        <div>
            <div className="card bg-base-100 border ml-5 mb-5">
                <figure className="px-5 pt-5">
                    <img
                        src={product_image}
                        className="rounded-xl border " />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{product_title}</h2>
                    <p>price: {price}</p>
                    <div className="">
                        <Link to={`/gadgets/${product_id}`}><button className="btn bg-white  rounded-full border-[#9538E2]">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;