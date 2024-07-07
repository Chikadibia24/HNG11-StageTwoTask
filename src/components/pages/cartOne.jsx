import "/src/App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import ProductData from "../productdata";
import SearchBar from "../searchbar";
import arrowRight from "/src/assets/arrowRight.svg";
import deleteIcon from "/src/assets/deleteIcon.svg";
import plusIcon from "/src/assets/plusIcon.svg";
import minusIcon from "/src/assets/minusIcon.svg";
import infoIcon from "/src/assets/infoIcon.svg";

const CartOne = () => {
  const Cart = () => {
    return (
      <div className="flex flex-col gap-[8px] w-[85%]">
        <div className="cart-sub-container-1">
          <h1 className="text-[30px]">Cart</h1>
        </div>

        <div className="cart-sub-container-2 flex items-center justify-center flex-wrap border-[1px] border-[#a9aaab] rounded-[8px] w-[100%] pl-[10px]">
          <div className="cart-product-details flex items-center flex-wrap gap-[20px] w-[70%]">
            <div className="cart-image-container flex items-center justify-center w-[205px] h-[155px] rounded-[8px]">
              <img
                src={
                  "https://res.cloudinary.com/chikadibia/image/upload/v1720282880/imageTV_df1cpl.png"
                }
                alt="imageTV"
                className="w-[165px] h-[109px]"
              />
            </div>

            <div className="product-title-container flex items-center gap-[25px]">
              <div className="product-title flex flex-col gap-[8px]">
                <div>
                  <h1 className="text-[24px]">
                    UFC 43” Inches 4k UHD Smart TV
                  </h1>
                  <p className="text-[#404040] text-[16px]">Black Color</p>
                </div>

                <div className="add-to-cart flex items-center justify-between  border-[1px] border-[#a9aaab] rounded-[4px] w-[80px] px-[10px] ">
                  <img
                    src={plusIcon}
                    alt="plusIcon"
                    className="hover:cursor-pointer"
                  />
                  <p className="ONE text-[#404040] text-[16px]">1</p>
                  <img
                    src={minusIcon}
                    alt="minusIcon"
                    className="hover:cursor-pointer"
                  />
                </div>
              </div>

              <div className="price-button-container flex flex-col gap-[15px]">
                <p className="text-[24px]">NGN 100,000</p>
                <button className="flex items-center justify-center gap-[20px] py-[10px] px-0 bg-[#FFE3E3] text-[#FF0000] text-[16px] rounded-[8px]">
                  <span>Delete</span>
                  <span>
                    <img src={deleteIcon} alt="deleteIcon" />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="subtotal flex flex-col items-center gap-[10px] border-l-[1px] border-l-[#a9aaab] w-[28%] px-[20px] py-[10px]">
            <div className="flex items-center justify-between w-[100%] text-[24px]">
              <p>Subtotal</p>
              <p>NGN 100,000</p>
            </div>

            <div className="flex items-center justify-between text-[16px] text-[#404040] w-[100%]">
              <p className="text-[#393939] text-[14px]">Discount</p>
              <p className="text-[#404040] text-[16px]">(20%) -NGN 20,000</p>
            </div>

            <div className="vat-container flex items-center justify-between text-[16px] w-[100%]">
              <p className="flex items-center text-[#393939] text-[14px] gap-[3px]">
                <span>VAT</span>
                <span>
                  <img src={infoIcon} alt="infoIcon" />
                </span>
              </p>

              <p className="text-[#404040] text-[16px]">+NGN 7,000</p>
            </div>

            <div className="total-container flex items-center justify-between w-[100%] text-[20px]">
              <p className="text-[#393939]">Total</p>
              <p>NGN 87,000</p>
            </div>

            <button className="flex items-center justify-center h-[40px] bg-black text-[white] text-[16px] rounded-[4px] w-[100%]">
              Proceed to checkout
            </button>

            <button className="flex items-center justify-center h-[40px] text-[16px] border border-[#a9aaab] rounded-[4px] w-[100%]">
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    );
}


  return (
    <div className="flex flex-col items-center gap-[50px]">
      <NavBar />
      <SearchBar />
      <div className="flex flex-col items-center gap-[20px]">
        <Cart />
        <div className="flex items-center gap-[5px] self-start">
          <h1 className="pl-[70px] text-[28px]">Similar Products</h1>
          <div className="flex items-center justify-center bg-[#EEE] w-[30px] h-[30px] rounded-full">
            <img src={arrowRight} alt="" className="hover:cursor-pointer"/>
          </div>
        </div>

        <ProductData />
      </div>
      <Footer />
    </div>
  );
}

export default CartOne;