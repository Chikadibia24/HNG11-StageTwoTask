import homeIcon from "../assets/homeIcon.svg";
import favoriteIconWhite from "../assets/favoriteIconWhite.svg";
import shoppingCartWhite from "../assets/shoppingCartWhite.svg";
import userIcon from "../assets/userIcon.svg";



const MobileBottomNavBar = () => {
  const NavItems = ({icon,text}) => {
    return (
      <div className="flex flex-col justify-center items-center gap-[4px] h-[100%]  pt-[4px]">
        <img src={icon} alt={icon} />
        <p className="text-[14px] text-[#ffffff]">{text}</p>
      </div>
    );
  }


  return (
    <div className="flex items-center justify-between md:hidden bg-[#606060] px-[30px] w-[100%] h-[66px] fixed z-10 bottom-0">
      <NavItems icon={homeIcon} text={"Home"} />
      <NavItems icon={favoriteIconWhite} text={"Favorites"} />
      <NavItems icon={shoppingCartWhite} text={"Cart"} />
      <NavItems icon={userIcon} text={"Profile"} />
    </div>
  );
}

export default MobileBottomNavBar