import imageTV from "../assets/imageTV.png";



const OrderedTV = () => {

  
  return (
    <div className="ordered-TV-container flex w-[100%] pt-[20px] px-[14px] md:px-[20px] gap-[10px] md:gap-[15px] lg:gap-[25px] lg:px-[64px]">
      <div className="cart-image-container flex items-center justify-center w-[128px] h-[90px] md:w-[160px] md:h-[125px] lg:w-[300px] lg:h-[170px] rounded-[4px] ">
        <img
          src={imageTV}
          alt="imageTV"
          className="w-[86px] h-[66px] md:w-[130px] md:h-[100px] lg:w-[220px] lg:h-[150px]"
        />
      </div>

      <div className="title-price-color-qty-container flex flex-col gap-[25px] w-[80%]">
        <div className="tv-title-price flex flex-col gap-[12px] md:flex-row md:items-center md:justify-between">
          <h1 className="text-[17px] md:text-[20px] lg:text-[24px] text-black">
            UFC 43” Inches 4k UHD Smart TV
          </h1>
          <p className="text-[15px] md:text-[20px] lg:text-[24px] text-black">
            NGN 100,000
          </p>
        </div>

        <div className="color-quantity flex items-center justify-between text-[14px] md:text-[16px] text-[#404040]">
          <p>Black Color</p>
          <p>QTY:1</p>
        </div>
      </div>
    </div>
  );
}

export default OrderedTV