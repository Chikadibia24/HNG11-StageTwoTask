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
      <div className="filterIcon-container flex items-center justify-center w-[34px] h-[34px] rounded-full">
        <img src={filterIcon} alt="filterIcon" />
      </div>
    );
  };

  const FilterBar = ({ image, type, name, id, placeholder, className }) => {
    return (
      <div className="flex items-center justify-center pl-[1px] pr-[5px] gap-[2px] h-[fit-content] rounded-[4px] border border-[#a9aaab] w-[max-content]">
        {/* <span>{text}</span> */}
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`flex items-center text-[#404040] text-[16px] pl-[3px] py-[3px] ${className}`}
        />
        <img src={image} alt={image} className="hover:cursor-pointer" />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[50px] items-center">
      <div className="flex flex-col items-center gap-[30px] w-[100%]">
        <NavBar />

        <SearchBar onClickCart={goToCart}/>

        <div className="flex items-center justify-center gap-[15px]">
          <FilterIcon />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"category"}
            id={"category"}
            placeholder={"Category"}
            className={"w-[75px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"brand"}
            id={"brand"}
            placeholder={"Brand"}
            className={"w-[60px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"features"}
            id={"features"}
            placeholder={"Features"}
            className={"w-[73px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"color"}
            id={"color"}
            placeholder={"Color"}
            className={"w-[60px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"inches"}
            id={"inches"}
            placeholder={"Inches"}
            className={"w-[60px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"price"}
            id={"price"}
            placeholder={"Price"}
            className={"w-[60px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"date"}
            id={"date"}
            placeholder={"Release Date"}
            className={"w-[110px]"}
          />
          <FilterBar
            image={arrowDownGray}
            type={"text"}
            name={"discount-and-deals"}
            id={"discount-and-deals"}
            placeholder={"Discount and Deals"}
            className={"w-[150px]"}
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