import "/src/App.css"
import logo from "../assets/logo.svg";
import searchIcon from "../assets/searchIcon.svg";
import iconCancel from "../assets/iconCancel.svg";
import favoriteIcon from "../assets/favoriteIcon.svg";
import shoppingCart from "../assets/shoppingCart.svg";
import arrowDownGray from "../assets/arrowDownGray.svg";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/userIcon.svg";

const SearchBar = ({ onClickCart }) => {
  const navigate = useNavigate();
  
  const goToHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };



  return (
    <div className="flex justify-between w-[94%] md:w-[97%] lg:w-[100%] h-[50px] lg:px-[64px]">
      <button
        onClick={goToHomePage}
        className="flex items-center md:gap-[4px] lg:gap-[5px] px-[3px]"
      >
        <img src={logo} alt="logo" className="md:w-[40px] lg:w-[45px]" />
        <div className="hidden md:flex flex-col items-start justify-center">
          <p className="text-black md:text-[20px] lg:text-[23px] mb-[-5px]">
            Danchika
          </p>

          <p className="text-black md:text-[20px] lg:text-[23px] mt-[-5px]">
            Electronics
          </p>
        </div>
      </button>

      <div className="flex items-center gap-[8px]">
        <div className="flex items-center md:gap-[4px] lg:gap-[6px] h-[45px] w-[280px] md:w-[260px] lg:w-[400px] border-[1px] border-[#a9aaab] px-[10px] md:px-[8px] lg:px-[15px] rounded-[8px]">
          <img
            src={searchIcon}
            alt="searchIcon"
            className="hover:cursor-pointer w-[15px] lg:w-[initial]"
          />

          <input
            id="searchfield"
            name="searchfield"
            type="text"
            value="Smart Televisions"
            className="pl-[6px] lg:pl-[initial] text-[14px] lg:text-[16px] text-[#404040] h-[43px] w-[249px] md:w-[220px] lg:w-[340px] border-[none]"
          />

          <img
            src={iconCancel}
            alt="iconCancel"
            className="hover:cursor-pointer w-[15px] lg:w-[initial]"
          />
        </div>

        <button className="hidden md:flex items-center justify-center h-[44px] lg:py-[9px] md:px-[16px] lg:px-[25px] bg-black rounded-[8px] hover:cursor-pointer  ">
          <p className="text-white md:text-[14px] lg:text-[18px]">Search</p>
        </button>
      </div>

      <div className="favorite-container flex gap-[15px]">
        <div className="hidden md:flex items-center gap-[6px]">
          <img
            src={favoriteIcon}
            alt="favoriteIcon"
            className="hover:cursor-pointer md:w-[18px] lg:w-[initial]"
          />
          <p className="text-[#404040] md:text-[14px] lg:text-[18px]">
            Favorites
          </p>
        </div>

        <button onClick={onClickCart} className="flex items-center justify-around gap-[0px]">
          <img
            src={shoppingCart}
            alt="shoppingCart"
            className="hover:cursor-pointer sm:w-[initial] md:w-[20px] lg:w-[initial]"
            id="cart"
          />
          <p
            className="cart-item-1 flex items-center justify-center w-[16px] h-[16px] bg-black text-white text-[12px] rounded-full"
          >
            1
          </p>
          <p className="hidden md:block text-[#404040] md:text-[14px] lg:text-[18px]">
            Cart
          </p>
        </button>

        <div className="hidden md:flex items-center gap-[6px]">
          <img
            src={userIcon}
            alt="userIcon"
            className="sm:hidden md:block lg:hidden "
          />
          <p className="text-[#404040] text-[18px] sm:hidden md:hidden lg:block">
            Chika
          </p>
          <img
            src={arrowDownGray}
            alt="arrowDownGray"
            className="hover:cursor-pointer md:w-[15px] lg:w-[initial]"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
