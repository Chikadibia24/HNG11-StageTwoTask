import homeIcon from "../assets/homeIcon.svg";
import favoriteIconWhite from "../assets/favoriteIconWhite.svg";
import shoppingCartWhite from "../assets/shoppingCartWhite.svg";
import userIcon from "../assets/userIcon.svg";
import { useNavigate } from "react-router-dom";



const MobileBottomNavBar = () => {
  const navigate = useNavigate();

  const goToCart = (e) => {
    e.preventDefault();
    navigate("/Cart");
  };


  const goToHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };


  const NavItems = ({icon,text,onClick}) => {
    return (
      <button onClick={onClick} className="flex flex-col justify-center items-center gap-[4px] h-[100%]  pt-[4px]">
        <img src={icon} alt={icon} />
        <p className="text-[14px] text-[#ffffff]">{text}</p>
      </button>
    );
  }


  return (
    <div className="flex items-center justify-between md:hidden bg-[#606060] px-[30px] w-[100%] h-[66px] fixed z-10 bottom-0">
      <NavItems onClick={goToHomePage} icon={homeIcon} text={"Home"} />
      <NavItems icon={favoriteIconWhite} text={"Favorites"} />
      <NavItems onClick={goToCart} icon={shoppingCartWhite} text={"Cart"} />
      <NavItems icon={userIcon} text={"Profile"} />
    </div>
  );
}

export default MobileBottomNavBar