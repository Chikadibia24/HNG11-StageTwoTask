import logo from "../assets/logo.svg";
import searchIcon from "../assets/searchIcon.svg";
import iconCancel from "../assets/iconCancel.svg";
import favoriteIcon from "../assets/favoriteIcon.svg";
import shoppingCart from "../assets/shoppingCart.svg";
import arrowDownGray from "../assets/arrowDownGray.svg";

const SearchBar = () => {
  return (
    <div className="flex justify-between  w-[96%] h-[50px]">
      <div className="flex items-center gap-[8px]">
        <img src={logo} alt="logo" className="hover:cursor-pointer" />
        <p className="text-black text-[24px] hover:cursor-pointer">
          Danchika Electronics
        </p>
      </div>

      <div className="flex items-center gap-[8px]">
        <div className="flex items-center gap-[6px] h-[45px] w-[400px] border-[1px] border-[#a9aaab] px-[15px] rounded-[8px]">
          <div className="flex items-center gap-[6px]">
            <img
              src={searchIcon}
              alt="searchIcon"
              className="hover:cursor-pointer"
            />
            <input
              type="text"
              placeholder="Smart Televisions"
              className="text-[16px] text-[#404040] h-[42px] w-[340px] border-[none] focus:"
            />
          </div>

          <img
            src={iconCancel}
            alt="iconCancel"
            className="hover:cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-center py-[9px] px-[25px] bg-black rounded-[8px] hover:cursor-pointer  ">
          <p className="text-white text-[18px]">Search</p>
        </div>
      </div>

      <div className="flex gap-[15px]">
        <div className="flex items-center gap-[6px]">
          <img
            src={favoriteIcon}
            alt="favoriteIcon"
            className="hover:cursor-pointer"
          />
          <p className="text-[#404040] text-[18px]">Favorites</p>
        </div>

        <div className="flex items-center gap-[6px]">
          <img
            src={shoppingCart}
            alt="shoppingCart"
            className="hover:cursor-pointer"
          />
          <p className="text-[#404040] text-[18px]">Cart</p>
        </div>

        <div className="flex items-center gap-[6px]">
          <p className="text-[#404040] text-[18px]">Chika</p>
          <img
            src={arrowDownGray}
            alt="arrowDownGray"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
