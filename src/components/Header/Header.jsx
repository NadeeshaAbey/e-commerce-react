import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full py-5 px-2 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
      {/* {header left } */}
      <div className="flex items-center">
        <IconButton sx={{ color: "red" }}>
          <MenuIcon sx={{ color: "#c82196" }} />
        </IconButton>
        <h1 className=" ml-2 text-sm font-bold">
          AUK <span className=" text-[#c82196]">DEV</span>
        </h1>
        <div className=" overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]">
          <input
            type="text"
            placeholder="Search"
            className=" ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
          />
          <IconButton>
            <SearchIcon className=" text-gray-400" />
          </IconButton>
        </div>
      </div>
      {/* {header right } */}
      <IconButton>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </header>
  );
};

export default Header;
