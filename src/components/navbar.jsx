import navPhoneIcon from "../assets/navPhoneIcon.svg";
import arrowDown from "../assets/arrowDown.svg";
import flagNigeria from "../assets/flagNigeria.svg"


const NavBar = () => {


  return (
    <nav className="nav flex items-center justify-between md:justify-center w-[100%] bg-[#606060] h-[50px] pl-[13px] pr-[10px] md:pl-[30px] md:pr-[30px] sticky top-0 z-10 lg:px-[64px]">
      <div className="nav-sub-container w-[98%] md:w-[94%] flex items-center justify-between h-[50px]">
        <div className="nav-contact flex items-center justify-center md:gap-[8px] md:w-[197px] h-[50px] ">
          <img
            src={navPhoneIcon}
            alt="Nav Bar Phone Icon"
            className="hover:cursor-pointer"
          />
          <p className="text-white text-[14px] hidden md:block">
            +234810000234
          </p>
        </div>

        <div className="discount-container flex items-center p-0 h-[50px] justify-center w-[301px] gap-[12px]">
          <div>
            <p className="text-white text-[12px] md:text-[14px]">Get 50% Off Selected Items</p>
          </div>

          <div className="vertical-line self-center m-0  border-l-[1px] border-l-[#ffffff] h-[40px]"></div>

          <div className="">
            <p className="text-[#D7FAFF] text-[12px] md:text-[14px]">Shop Now</p>
          </div>
        </div>

        <div className="nigeria-container flex items-center justify-center w-[auto] md:w-[197px] h-[80px] gap-[20px] md:gap-[40px]">
          <div className="flex items-center justify-center gap-[5px] md:gap-[12px]">
            <p className="text-white text-[12px] md:text-[14px]">EN</p>
            <img
              src={arrowDown}
              alt="arrowDown"
              className="w-[11px] md:w-[initial] hover:cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-center gap-[6px] md:gap-[12px]">
            <img
              src={flagNigeria}
              alt="flagNigeria"
              className="w-[16px] md:w-[initial] hover:cursor-pointer"
            />
            <p className="text-white text-[14px] hidden md:block">Nigeria</p>
            <img
              src={arrowDown}
              alt="arrowDown"
              className="w-[11px] md:w-[initial] hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
