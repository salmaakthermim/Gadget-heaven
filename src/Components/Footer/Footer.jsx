import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="  bg-slate-300 p-16">
                <div className='text-center mb-8'>
                    <h1>Gadget Heaven</h1>
                    <p>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <hr />
              <div className='lg:flex mx-auto gap-40 mt-4 lg:ml-48'>
              <nav>
                    <h6 className="footer-title">Services</h6>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>
                   
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Contact</p>
                   
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
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