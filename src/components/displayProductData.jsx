import "../App.css"
import favoriteIcon from "../assets/favoriteIcon.svg"


const DisplayProductData = ({ products }) => {
  const { image, title, description, price, buttonText } = products;
  return (
    <div className="productCards bg-white flex flex-col items-center gap-[10px] w-[400px] p-[10px]">
      <div className="tv-container flex flex-col items-center pl-[10px] pt-[20px] pr-[3px] pb-[7px] rounded-[6px] w-[100%]">
        <img src={image} alt="imageTV" />

        <div className="self-end flex items-center justify-center w-[40px] h-[40px] bg-white rounded-full">
          <img
            src={favoriteIcon}
            alt="favoriteIcon"
            className="hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[4px] w-[100%]">
        <h1 className="text-[23px]">{title}</h1>
        <p className="text-[#404040]">{description}</p>
      </div>

      <div className="flex items-center justify-between w-[100%]">
        <p className="text-[20px]">{price}</p>

        <button className="text-[18px] text-[#404040] border-b-[1px] border-b-[#404040] hover:border-b-[#000] hover:border-b-[2px]">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default DisplayProductData