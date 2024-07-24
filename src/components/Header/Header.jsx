import React from "react";
import menu from "../../icons/menu-svgrepo-com.svg";
import search from "../../icons/search-svgrepo-com.svg";
import cart from "../../icons/cart-shopping-svgrepo-com.svg";

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* {header left } */}
      <div className="flex items-center">
        <img src={menu} alt="menu" className="w-6 h-6 object-contain cursor-pointer"/>
        <h1 className=" ml-2 text-sm font-bold">
          AUK <span className=" text-[#c82196]">DEV</span>
        </h1>
        <div className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]">
          <input type="text" placeholder="Search" className=" ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"/>
          <img src={search} alt="search" className="w-6 h-6 object-contain cursor-pointer mr-2"/>
        </div>
      </div>
      {/* {header right } */}
      <img src={cart} alt="cart" className="w-6 h-6 object-contain cursor-pointer"/>
    </header>
  );
};

export default Header;
