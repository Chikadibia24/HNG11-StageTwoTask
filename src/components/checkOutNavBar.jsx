// import logo from "../assets/logo.svg"; 
// import favoriteIcon from "../assets/favoriteIcon.svg";
// import shoppingCart from "../assets/shoppingCart.svg";
// import arrowDownGray from "../assets/arrowDownGray.svg";

import { useNavigate } from "react-router-dom";



const CheckOutNavBar = ({ className, logoIcon, iconFavorite, cartIcon, downArrow, paraClassName }) => {
  
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/home");
  };
  

  const goToCart = () => {
    navigate("/cart");
  };



  return (
    <div
      className={`flex items-center justify-between sticky top-0 z-10 px-[20px] w-[100%] h-[60px] ${className}`}
    >
      <button onClick={goToHomePage} className="flex items-center gap-[8px]">
        <img src={logoIcon} alt="logo" className="hover:cursor-pointer" />
        <p className={`${paraClassName} text-[24px] hover:cursor-pointer`}>
          Danchika Electronics
        </p>
      </button>

      <div className="favorite-container flex gap-[15px]">
        <div className="flex items-center gap-[6px]">
          <img
            src={iconFavorite}
            alt="favoriteIcon"
            className="hover:cursor-pointer"
          />
          <p className={`${paraClassName} text-[18px]`}>Favorites</p>
        </div>

        <button onClick={goToCart} className="flex items-center gap-[6px]">
          <img
            src={cartIcon}
            alt="shoppingCart"
            className="hover:cursor-pointer"
          />
          <p className={`${paraClassName} text-[18px]`}>Cart</p>
        </button>

        <div className="flex items-center gap-[6px]">
          <p className={`${paraClassName} text-[18px]`}>Chika</p>
          <img
            src={downArrow}
            alt="arrowDown"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckOutNavBar;