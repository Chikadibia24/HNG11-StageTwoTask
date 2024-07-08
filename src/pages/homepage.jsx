import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Pagination from "../components/pagination";
import ProductData from "../components/productdata";
import SearchBar from "../components/searchbar";
import "/src/App.css";
import arrowDownGray from "/src/assets/arrowDownGray.svg";
import filterIcon from "/src/assets/filterIcon.svg";

const HomePage = () => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/Cart");
  };

  // const goToHomePage = () => {
  //   navigate("/home");
  // };

  const FilterIcon = () => {
    return (
      <div className="filterIcon-container flex items-center justify-center sm:w-[28px] sm:h-[28px] lg:w-[34px] lg:h-[34px] rounded-full">
        <img src={filterIcon} alt="filterIcon" className="sm:w-[18px] sm:h-[16px] lg:w-[initial] lg:h-[initial]"/>
      </div>
    );
  };

  const FilterBar = ({ image, type, name, id, placeholder, className }) => {
    return (
      <div className="flex items-center justify-center pl-[1px] sm:pr-[3px] lg:pr-[5px] gap-[2px] h-[fit-content] rounded-[4px] border border-[#a9aaab] w-[max-content]">
        {/* <span>{text}</span> */}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`flex items-center text-[#404040] sm:text-[13px] lg:text-[16px] sm:pl-[2px] lg:pl-[3px] sm:py-[2px] lg:py-[3px] ${className}`}
        />
        <img src={image} alt={image} className="hover:cursor-pointer sm:w-[11px] sm:h-[8px] lg:w-[initial] lg:h-[initial]" />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[50px] items-center">
      <div className="flex flex-col items-center gap-[30px] w-[100%]">
        <NavBar />

        <SearchBar onClickCart={goToCart} />

        <div className="flex sm:flex-col md:flex-row items-center justify-center sm:gap-[10px] md:gap-[10px] lg:gap-[15px]">
          <FilterIcon />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"category"}
            id={"category"}
            placeholder={"Category"}
            className={"sm:w-[55px] lg:w-[75px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"brand"}
            id={"brand"}
            placeholder={"Brand"}
            className={"sm:w-[38px] lg:w-[60px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"features"}
            id={"features"}
            placeholder={"Features"}
            className={"sm:w-[55px] lg:w-[73px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"color"}
            id={"color"}
            placeholder={"Color"}
            className={"sm:w-[34px] lg:w-[60px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"inches"}
            id={"inches"}
            placeholder={"Inches"}
            className={"sm:w-[41px] lg:w-[60px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"price"}
            id={"price"}
            placeholder={"Price"}
            className={"sm:w-[34px] lg:w-[60px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"date"}
            name={"date"}
            id={"date"}
            placeholder={"Release Date"}
            className={"sm:w-[130px] lg:w-[150px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"discount-and-deals"}
            id={"discount-and-deals"}
            placeholder={"Discount and Deals"}
            className={"sm:w-[117px] lg:w-[150px]"}
          />
        </div>
      </div>

      <ProductData />
      <Pagination />
      <Footer />
    </div>
  );
};

export default HomePage;
