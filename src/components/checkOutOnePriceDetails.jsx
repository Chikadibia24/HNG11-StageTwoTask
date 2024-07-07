import imageTV from "../assets/imageTV.png";



const CheckOutOnePriceDetails = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="tv-image-description-container flex items-center justify-between">
        <div className="cart-image-container flex items-center justify-center w-[220px] h-[135px] ">
          <img src={imageTV} alt="imageTV" className="w-[180px] h-[115px]" />
        </div>

        <div className="tv-description-container flex flex-col gap-[8px] ">
          <div className="flex flex-col gap-[5px]">
            <h1 className="text-black text-[20px]">
              UFC 43” Inches 4k UHD Smart TV
            </h1>

            <p className="text-[#404040] text-[18px]">N 100,000</p>
          </div>

          <div className="flex items-center justify-between text-[#404040] text-[16px]">
            <p>Black Color</p>

            <p>QTY:1</p>
          </div>
        </div>
      </div>

      <div className="subtotal-div-container flex flex-col gap-[8px]">
        <div className="subtotal-div flex items-center justify-between text-black text-[20px]">
          <p>Subtotal</p>
          <p>NGN 100,000</p>
        </div>

        <div className="shipping-div flex items-center justify-between text-black text-[20px]">
          <p>Shipping</p>
          <p>NGN 12,000</p>
        </div>

        <div className="total-div total-container flex items-center justify-between text-black text-[20px]">
          <p>Total</p>
          <p>NGN 112,000</p>
        </div>
      </div>
    </div>
  );
}

export default CheckOutOnePriceDetails;