import userIcon from "../assets/userIcon.svg"
import { useNavigate } from "react-router-dom";
import { useCount } from "../pages/CountContext";



const CheckOutNavBar = ({ className, logoIcon, iconFavorite, cartIcon, downArrow, paraClassName }) => {


  const { count } = useCount();

  
  const navigate = useNavigate();

  const goToHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };
  

  const goToCart = (e) => {
    e.preventDefault();
    navigate("/cart");
  };



  return (
    <div
      className={`flex items-center justify-between sticky top-0 z-10 px-[20px] lg:px-[64px] w-[100%] h-[60px] ${className}`}
    >
      <button onClick={goToHomePage} className="flex items-center gap-[8px]">
        <img src={logoIcon} alt="logo" className="md:w-[40px] lg:w-[45px]" />

        <div className="hidden md:flex flex-col items-start">
          <p
            className={`${paraClassName} mb-[-5px] md:text-[20px] lg:text-[24px]`}
          >
            Danchika
          </p>

          <p
            className={`${paraClassName} mt-[-5px] md:text-[20px] lg:text-[24px]`}
          >
            Electronics
          </p>
        </div>
      </button>

      <div className="favorite-container flex gap-[15px]">
        <div className="hidden md:flex items-center gap-[6px]">
          <img
            src={iconFavorite}
            alt="favoriteIcon"
            className="hover:cursor-pointer md:w-[19px] lg:w-[initial]"
          />
          <p className={`${paraClassName} sm:text-[16px] lg:text-[18px]`}>
            Favorites
          </p>
        </div>

        <button onClick={goToCart} className="flex items-center gap-[6px]">
          <img
            src={cartIcon}
            alt="shoppingCart"
            className="hover:cursor-pointer w-[35px] md:w-[19px] lg:w-[27px]"
          />
          <p className="cart-item-2 flex items-center justify-center w-[16px] h-[16px] bg-black text-white text-[12px] rounded-full">
            {count}
          </p>
          <p
            className={`${paraClassName} hidden md:block md:text-[16px] lg:text-[18px]`}
          >
            Cart
          </p>
        </button>

        <div className="hidden md:flex items-center gap-[6px]">
          <img src={userIcon} alt="userIcon" className="md:block lg:hidden" />
          <p className={`${paraClassName} text-[18px] sm:hidden lg:block`}>
            Chika
          </p>
          <img
            src={downArrow}
            alt="arrowDown"
            className="hover:cursor-pointer md:w-[15px] lg:w-[initial]"
          />
        </div>
      </div>
    </div>
  );
}

export default CheckOutNavBar;