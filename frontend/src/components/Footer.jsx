import React from 'react'
import { Mail } from 'lucide-react'
import logo from '../assets/images/navbar/SHOP.CO.svg'
import twitter from '../assets/images/social/twitter.svg'
import instagram from '../assets/images/social/instgram.svg'
import github from '../assets/images/social/github.svg'
import facebook from '../assets/images/social/facebook.svg'
import visa from '../assets/images/bank/Visa.svg'
import mastercard from '../assets/images/bank/Mastercard.svg'
import paypal from '../assets/images/bank/Paypal.svg'
import gPay from '../assets/images/bank/GPay.svg'

const Footer = () => {
    const banks = [
        { id: 1, img: visa, name: 'Visa' },
        { id: 2, img: mastercard, name: 'Mastercard' },
        { id: 3, img: paypal, name: 'PayPal' },
        { id: 4, img: gPay, name: 'Google Pay' }
    ];
    
    return (
        <footer className='bg-[#F0F0F0] pt-20 pb-10 mt-20'>
            {/* Newsletter Section - Black Box */}
            <div className='px-4 md:px-16 lg:px-24'>
                <div className='bg-black rounded-[20px] lg:grid lg:grid-cols-2 px-6 py-8 md:px-16 md:py-10 -mt-32 relative z-10'>
                    {/* Title */}
                    <h2 className='text-white text-2xl md:text-4xl lg:text-3xl  font-bold text-center lg:text-start mb-8 leading-tight max-w-[550px] lg: mx-auto'>
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    
                    {/* Email Input and Button */}
                    <div className='flex flex-col gap-3 max-w-[350px] lg:w-full mx-auto lg:justify-center '>
                        {/* Email Input with Icon */}
                        <div className='relative'>
                            <Mail className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                            <input 
                                type="email"
                                placeholder='Enter your email address'
                                className='w-full h-12 pl-12 pr-4 rounded-full bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-gray-300'
                            />
                        </div>
                        
                        {/* Subscribe Button */}
                        <button className='w-full h-12 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors'>
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className='px-4 md:px-16 lg:px-24 mt-12'>
                {/* Grid Layout */}
                <div className='grid lg:grid-cols-6 gap-8 md:gap-6'>
                    
                    {/* Logo and Socials - Takes 2 columns on desktop */}
                    <div className='col-span-2 flex flex-col gap-6'>
                        {/* Logo */}
                        <div>
                            <img src={logo} alt="SHOP.CO Logo" className='h-8' />
                        </div>
                        
                        {/* Description */}
                        <p className='text-stone-600 text-sm leading-relaxed max-w-[300px]'>
                            We have clothes that suits your style and which you're proud to wear. From women to men.
                        </p>

                        {/* Social Icons */}
                        <div className='flex gap-3'>
                            <a href="#" className='w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors'>
                                <img src={twitter} alt="Twitter" className='w-5 h-5' />
                            </a>
                            <a href="#" className='w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors'>
                                <img src={facebook} alt="Facebook" className='w-5 h-5' />
                            </a>
                            <a href="#" className='w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors'>
                                <img src={instagram} alt="Instagram" className='w-5 h-5' />
                            </a>
                            <a href="#" className='w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors'>
                                <img src={github} alt="GitHub" className='w-5 h-5' />
                            </a>
                        </div>
                    </div>

                    
                        {/* Company Links */}
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-black font-medium text-base tracking-wider mb-1'>
                                COMPANY
                            </h3>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>About</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Features</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Works</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Career</a>
                        </div>
                        
                        {/* Help Links */}
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-black font-medium text-base tracking-wider mb-1'>
                                HELP
                            </h3>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Customer Support</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Delivery Details</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Terms & Conditions</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Privacy Policy</a>
                        </div>
                        
                    
                    
                    
                        {/* FAQ Links */}
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-black font-medium text-base tracking-wider mb-1'>
                                FAQ
                            </h3>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Account</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Manage Deliveries</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Orders</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Payment</a>
                        </div>
                        
                        {/* Resources Links */}
                        <div className='flex flex-col gap-5'>
                            <h3 className='text-black font-medium text-base tracking-wider mb-1'>
                                RESOURCES
                            </h3>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Free eBooks</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Development Tutorial</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>How to - Blog</a>
                            <a href="#" className='text-stone-600 text-sm hover:text-black transition-colors'>Youtube Playlist</a>
                        </div>
                    </div>
                
                {/* Divider */}
                <hr className='border-gray-300 my-8' />

                {/* Copyright and Payment Methods */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                    {/* Copyright */}
                    <p className='text-stone-600 text-sm text-center md:text-left'>
                        Shop.co © 2000-2023, All Rights Reserved
                    </p>
                    
                    {/* Payment Methods */}
                    <div className='flex gap-3'>
                        {banks.map((bank) => (
                            <div 
                                key={bank.id} 
                                className='w-12 h-8 bg-white rounded border border-gray-200 flex items-center justify-center p-1.5'
                            >
                                <img 
                                    src={bank.img} 
                                    alt={bank.name}
                                    className='w-full h-full object-contain' 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer