import banner from '../../assets/banner.jpg' 

const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#9538E2] relative top-20   -mt-20  rounded-3xl py-10 container mx-auto">
                <div className="hero-content text-center">
                    <div className="max-w-md py-16 text-white">
                        <h1 className="  text-4xl -mt-10 font-bold">Upgrade Your Tech Accessorize with  Gadget Heaven Accessories</h1>
                        <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn rounded-full px-7 py-0 text-[#9538E2]">Shop Now</button>
                     
                    </div>
                </div>
            </div>
            <img className='w-96 rounded-3xl mx-auto relative z-10  ' src={banner}  />
        </div>
    );
};

export default Banner;