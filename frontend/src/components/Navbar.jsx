import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/navbar/SHOP.CO.svg";
import cartIcon from "../assets/images/navbar/cart.svg";
import searchIcon from "../assets/images/navbar/search.svg";
import profileIcon from "../assets/images/navbar/profile.svg";
import menuIcon from "../assets/images/navbar/menu-items.svg";
import closeIcon from "../assets/images/navbar/dropdown_icon.png";
import dropIcon from "../assets/images/navbar/dropIcon.svg";
import { Search } from "lucide-react";

const Navbar = () => {
  const [isVisible, setVisible] = useState(false);

  const barTabs = [
    {
      id: 1,
      tab: "Home",
      route: "/",
    },
    {
      id: 2,
      tab: "Shop",
      route: "/shop",
    },
    {
      id: 3,
      tab: "New Arrivals",
      route: "/new-arrivals",
    },
    {
      id: 4,
      tab: "About",
      route: "/about",
    },
  ];

  return (
    <nav className="relative grid lg:grid-cols-[auto_minmax(400px,auto)_1fr_minmax(100px,auto)] items-center px-6 py-5 font-medium w-full">
      {/* LEFT */}
      <div className="flex col-span-2 md:col-1 items-center gap-4">
        <img
          onClick={() => setVisible(true)}
          src={menuIcon}
          alt="Menu"
          className="sm:hidden w-6 h-6 cursor-pointer"
        />

        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-36 ml-4 cursor-pointer"
          />
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white z-50 shadow-lg transition-all duration-300 ${
          isVisible ? "w-4/5" : "w-0"
        } overflow-hidden`}
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
          <NavLink
            to="/"
            className="p-4 border-b hover:bg-gray-50"
            onClick={() => setVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className="p-4 border-b hover:bg-gray-50"
            onClick={() => setVisible(false)}
          >
            Shop
          </NavLink>
          <NavLink
            to="/new-arrivals"
            className="p-4 border-b hover:bg-gray-50"
            onClick={() => setVisible(false)}
          >
            New Arrivals
          </NavLink>
          <NavLink
            to="/about"
            className="p-4 border-b hover:bg-gray-50"
            onClick={() => setVisible(false)}
          >
            About
          </NavLink>
        </div>
      </div>

      {/* CENTER NAV */}
      <ul className="hidden sm:flex gap-6 md:col-span-2 lg:col-span-1 text-sm text-gray-700 justify-center">
        {barTabs.map((bar) => (
          <NavLink
            key={bar.id}
            to={bar.route}
            className={({ isActive }) =>
              `hover:text-black flex flex-row gap-1 items-center ${
                isActive ? "text-black" : "text-gray-700"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <p>{bar.tab}</p>
                <img
                  src={dropIcon}
                  alt="chevronDown"
                  className={isActive ? "block w-4 h-4" : "hidden"}
                />
              </>
            )}
          </NavLink>
        ))}
      </ul>

      {/* SEARCH BAR */}
      <div className="relative w-full hidden lg:block">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-[#F0F0F0] w-full h-12 pl-12 pr-4 rounded-full text-black text-sm 
      focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* RIGHT ICONS */}
      <div className="flex justify-end col-4 items-center gap-4">
        <div className="w-7 h-7 flex items-center justify-center cursor-pointer">
          <img src={searchIcon} className="w-5 h-5" alt="Search" />
        </div>

        <div className="relative group w-7 h-7 flex items-center justify-center cursor-pointer">
          <img src={profileIcon} className="w-5 h-5" alt="Profile" />

          <div className="hidden group-hover:block absolute right-0 top-8 bg-white shadow-lg border rounded-md w-40">
            <ul className="flex flex-col p-3 text-gray-600">
              <li className="py-1 px-2 hover:text-black cursor-pointer">
                My Profile
              </li>
              <li className="py-1 px-2 hover:text-black cursor-pointer">
                Orders
              </li>
              <li className="py-1 px-2 hover:text-black cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        </div>

        <Link
          to="/cart"
          className="relative w-7 h-7 flex items-center justify-center cursor-pointer"
        >
          <img src={cartIcon} className="w-5 h-5" alt="Cart" />
          <span className="absolute top-0 right-0 bg-black text-white w-4 h-4 rounded-full text-[9px] flex items-center justify-center">
            10
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;