import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/navbar/SHOP.CO.svg";
import cartIcon from "../assets/images/navbar/cart.svg";
import searchIcon from "../assets/images/navbar/search.svg";
import profileIcon from "../assets/images/navbar/profile.svg";
import menuIcon from "../assets/images/navbar/menu-items.svg";
import closeIcon from "../assets/images/navbar/dropdown_icon.png";

const Navbar = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-5 font-medium">

      {/* LEFT: Logo + Mobile Menu Icon */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <img
          onClick={() => setVisible(true)}
          src={menuIcon}
          alt="Menu"
          className="sm:hidden w-6 h-6 cursor-pointer"
        />

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-36 cursor-pointer" />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white z-50 shadow-lg transition-all duration-300 
        ${isVisible ? "w-4/5" : "w-0"} overflow-hidden`}
      >
        <div className="flex flex-col text-gray-700">

          {/* Back Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-4 cursor-pointer border-b"
          >
            <img src={closeIcon} alt="Close" className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          {/* Mobile Nav Items */}
          <NavLink to="/" className="p-4 border-b" onClick={() => setVisible(false)}>Home</NavLink>
          <NavLink to="/shop" className="p-4 border-b" onClick={() => setVisible(false)}>Shop</NavLink>
          <NavLink to="/new-arrivals" className="p-4 border-b" onClick={() => setVisible(false)}>New Arrivals</NavLink>
          <NavLink to="/about" className="p-4 border-b" onClick={() => setVisible(false)}>About</NavLink>
        </div>
      </div>

      {/* CENTER: Desktop Nav */}
      <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
        <NavLink to="/" className="hover:text-black">Home</NavLink>
        <NavLink to="/shop" className="hover:text-black">Shop</NavLink>
        <NavLink to="/new-arrivals" className="hover:text-black">New Arrivals</NavLink>
        <NavLink to="/about" className="hover:text-black">About</NavLink>
      </ul>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="w-7 h-7 flex items-center justify-center cursor-pointer">
          <img src={searchIcon} className="w-5 h-5" alt="Search" />
        </div>

        {/* Profile with Dropdown */}
        <div className="relative group w-7 h-7 flex items-center justify-center cursor-pointer">
          <img src={profileIcon} className="w-5 h-5" alt="Profile" />

          <div className="hidden group-hover:block absolute right-0 top-8 bg-white shadow-lg border rounded-md w-40">
            <ul className="flex flex-col p-3 text-gray-600">
              <li className="py-1 px-2 hover:text-black cursor-pointer">My Profile</li>
              <li className="py-1 px-2 hover:text-black cursor-pointer">Orders</li>
              <li className="py-1 px-2 hover:text-black cursor-pointer">Logout</li>
            </ul>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative w-7 h-7 flex items-center justify-center cursor-pointer">
          <img src={cartIcon} className="w-5 h-5" alt="Cart" />

          {/* Badge */}
          <span className="absolute top-0 right-0 bg-black text-white w-4 h-4 rounded-full 
          text-[9px] flex items-center justify-center">
            10
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
