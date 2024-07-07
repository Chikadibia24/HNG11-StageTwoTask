import "/src/App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import Pagination from "../pagination";
import ProductData from "../productdata";
import SearchBar from "../searchbar";
import arrowDownGray from "/src/assets/arrowDownGray.svg";
import filterIcon from "/src/assets/filterIcon.svg";

const HomePage = () => {
  const FilterIcon = () => {
    return (
      <div className="filterIcon-container flex items-center justify-center w-[34px] h-[34px] rounded-full">
        <img src={filterIcon} alt="filterIcon" />
      </div>
    );
  }

  const FilterBar = ({text,image}) => {
    return (
      <button className="flex items-center justify-center p-[8px] gap-[8px] h-[34px] rounded-[4px] text-[#404040] text-[18px] border border-[#a9aaab]">
        <span>{text}</span>
        <span>
          <img src={image} alt={image} />
        </span>
      </button>
    );
  }


  return (
    <div className="flex flex-col gap-[50px] items-center">
      <div className="flex flex-col items-center gap-[30px] w-[100%]">
        <NavBar />

        <SearchBar />

        <div className="flex items-center justify-center gap-[15px]">
          <FilterIcon />
          <FilterBar text={"Category"} image={arrowDownGray} />
          <FilterBar text={"Brand"} image={arrowDownGray} />
          <FilterBar text={"Features"} image={arrowDownGray} />
          <FilterBar text={"Color"} image={arrowDownGray} />
          <FilterBar text={"Inches"} image={arrowDownGray} />
          <FilterBar text={"Price"} image={arrowDownGray} />
          <FilterBar text={"Release Date"} image={arrowDownGray} />
          <FilterBar text={"Discount and Deals"} image={arrowDownGray} />
        </div>
      </div>

      <ProductData />
      <Pagination />
      <Footer />
    </div>
  );
}

export default HomePage;