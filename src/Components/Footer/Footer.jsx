import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" border mt-10   p-16">
                <div className='text-center mb-8'>
                    <h1 className='font-bold text-2xl'>Gadget Heaven</h1>
                    <p className='font-semibold text-gray-600'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <hr />
              <div className='lg:flex mx-auto gap-40 mt-4 lg:ml-48'>
              <nav>
                    <h6 className="font-bold">Services</h6>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                   
                </nav>
                <nav>
                    <h6 className="font-bold">Company</h6>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                   
                </nav>
                <nav>
                    <h6 className="font-bold">Legal</h6>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                    
                   
                </nav>
              </div>
            </footer>
        </div>
    );
};

export default Footer;