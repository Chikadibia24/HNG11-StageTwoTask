import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Pagination from "../components/pagination";
import ProductData from "../components/productdata";
import SearchBar from "../components/searchbar";
import "/src/App.css";
import arrowDownGray from "/src/assets/arrowDownGray.svg";
import filterIcon from "/src/assets/filterIcon.svg";
import MobileBottomNavBar from "../components/MobileBottomNavBar";

const HomePage = () => {
  const navigate = useNavigate();

  const goToCart = (e) => {
    e.preventDefault();
    navigate("/Cart");
  };
  

  const FilterIcon = () => {
    return (
      <div className="filterIcon-container flex items-center justify-center w-[40px] h-[40px] rounded-full">
        <img src={filterIcon} alt="filterIcon" className="w-[18px] h-[16px] lg:w-[initial] lg:h-[initial]"/>
      </div>
    );
  };

  const FilterBar = ({ image, type, name, id, placeholder, className, dropDownIconClassName }) => {
    return (
      <div className="flex items-center justify-center pl-[3px] md:pl-[1px] pr-[3px] lg:pr-[5px] gap-[2px] h-[38px] rounded-[4px] border border-[#a9aaab] w-[max-content]">
        <input
          type={type}
          name={name}
          id={id}
          defaultValue={placeholder}
          className={`flex items-center text-[#404040] text-[10px] md:text-[12px] lg:text-[16px] pl-[2px] lg:pl-[3px] h-[36px] ${className}`}
        />
        <img
          src={image}
          alt={image}
          className={`${dropDownIconClassName} hover:cursor-pointer w-[10px] h-[7px] md:w-[11px] md:h-[8px] lg:w-[initial] lg:h-[initial]`}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[50px]">
      <div className="flex flex-col items-center gap-[30px] w-[100%]">
        <NavBar />

        <SearchBar onClickCart={goToCart} />

        <div className="flex flex-wrap md:flex-nowrap md:flex-row items-center justify-center gap-[10px] md:gap-[9px] lg:gap-[15px]">
          <FilterIcon />

          <div className="both-filters-wrapper flex flex-col gap-[15px] md:gap-[9px] md:flex-row lg:gap-[15px]">
            <div className="first-filter-row-wrapper flex items-center gap-[9px] md:gap-[9px] lg:gap-[15px]">
              <FilterBar
                image={arrowDownGray}
                type={"text"}
                name={"category"}
                id={"category"}
                placeholder={"Category"}
                className={"w-[44px] md:w-[51px] lg:w-[75px]"}
              />
              <FilterBar
                image={arrowDownGray}
                type={"text"}
                name={"brand"}
                id={"brand"}
                placeholder={"Brand"}
                className={"w-[30px] md:w-[36px] lg:w-[60px]"}
              />
              <FilterBar
                image={arrowDownGray}
                type={"text"}
                name={"features"}
                id={"features"}
                placeholder={"Features"}
                className={"w-[44px] md:w-[51px] lg:w-[73px]"}
              />
              <FilterBar
                image={arrowDownGray}
                type={"text"}
                name={"color"}
                id={"color"}
                placeholder={"Color"}
                className={"w-[27px] md:w-[32px] lg:w-[60px]"}
              />
              <FilterBar
                image={arrowDownGray}
                type={"text"}
                name={"inches"}
                id={"inches"}
                placeholder={"Inches"}
                className={"w-[33px] md:w-[40px] lg:w-[60px]"}
              />
            </div>

            <div className="second-filter-row-wrapper flex items-center gap-[10px] md:gap-[9px] lg:gap-[15px]">
              <FilterBar
                image={arrowDownGray}
                type={"text"}
                name={"price"}
                id={"price"}
                placeholder={"Price"}
                className={"w-[27px] md:w-[32px] lg:w-[60px]"}
              />
              <FilterBar
                image={arrowDownGray}
                type={"date"}
                name={"date"}
                id={"date"}
                placeholder={"Release Date"}
                className={"w-[130px] md:w-[125px] lg:w-[150px]"}
                dropDownIconClassName={"hidden ld:block"}
              />
              <FilterBar
                image={arrowDownGray}
                type={"text"}
                name={"discount-and-deals"}
                id={"discount-and-deals"}
                placeholder={"Discount and Deals"}
                className={"w-[89px] md:w-[112px] lg:w-[150px]"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-[100%] p-[10px] lg:px-[64px]">
        <ProductData />
      </div>

      <div className="flex justify-center w-[100%]">
        <Pagination />
      </div>

      <div className="flex justify-center w-[100%] lg:px-[64px] mt-[50px]">
        <Footer />
        <MobileBottomNavBar />
      </div>
    </div>
  );
};

export default HomePage;
