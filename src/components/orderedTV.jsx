import imageTV from "../assets/imageTV.png";



const OrderedTV = () => {
  return (
    <div className="ordered-TV-container flex w-[100%] pt-[20px] px-[20px] gap-[25px]">
      <div className="cart-image-container flex items-center justify-center w-[300px] h-[170px] rounded-[4px] ">
        <img src={imageTV} alt="imageTV" className="w-[220px] h-[150px]" />
      </div>

      <div className="title-price-color-qty-container flex flex-col gap-[25px] w-[80%]">
        <div className="tv-title-price flex items-center justify-between text-[24px] text-black">
          <h1>UFC 43” Inches 4k UHD Smart TV</h1>
          <p>NGN 100,000</p>
        </div>

        <div className="color-quantity flex items-center justify-between text-[16px] text-[#404040]">
          <p>Black Color</p>
          <p>QTY:1</p>
        </div>
      </div>
    </div>
  );
}

export default OrderedTV