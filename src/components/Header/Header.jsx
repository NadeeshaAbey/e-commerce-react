import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  return (
    <header className=" fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* {header left } */}
      <div className="flex items-center">
        <MenuIcon />
        <h1 className=" ml-2 text-sm font-bold">
          AUK <span className=" text-[#c82196]">DEV</span>
        </h1>
        <div className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]">
          <input type="text" placeholder="Search" className=" ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"/>
          <SearchIcon className=" text-gray-400"/>
        </div>
      </div>
      {/* {header right } */}
      <ShoppingCartOutlinedIcon />
    </header>
  );
};

export default Header;
