import { useNavigate } from "react-router-dom";
import "/src/App.css";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import ProductData from "../components/productdata";
import SearchBar from "../components/searchbar";
import arrowRight from "../assets/arrowRight.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import plusIcon from "../assets/plusIcon.svg";
import minusIcon from "../assets/minusIcon.svg";
import infoIcon from "../assets/infoIcon.svg";
import MobileBottomNavBar from "../components/MobileBottomNavBar";

const CartOne = () => {
  
  const navigate = useNavigate();

  const goToCheckoutOne = (e) => {
    e.preventDefault();
    navigate("/checkoutone");
  };

  const goToHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const Cart = () => {
    return (
      <div className="flex flex-col gap-[8px] w-[94%] md:w-[96%] lg:w-[88%]">
        <div className="cart-sub-container-1">
          <h1 className="text-[30px]">Cart</h1>
        </div>

        <div className="cart-sub-container-2 flex items-center justify-center flex-col gap-[40px] md:flex-row md:gap-[0px] border-[1px] border-[#4040407f] rounded-[8px] w-[100%] pt-[30px] md:pt-[initial] md:pl-[20px]">
          <div className="cart-product-details flex items-center justify-center lg:justify-start flex-wrap lg:flex-nowrap gap-[20px] lg:gap-[10px] w-[98%] md:w-[50%] lg:w-[73%] py-[10px] md:py-[initial]">
            <div className="cart-image-container flex items-center justify-center w-[352px] h-[230px] md:w-[330px] md:h-[190px] md:mt-[15px] lg:mt-[initial] lg:w-[190px] lg:h-[155px] rounded-[8px]">
              <img
                src={
                  "https://res.cloudinary.com/chikadibia/image/upload/v1720282880/imageTV_df1cpl.png"
                }
                alt="imageTV"
                className="w-[270px] md:w-[250px] md:h-[170px] lg:w-[160px] lg:h-[109px]"
              />
            </div>

            <div className="product-title-container flex items-center lg:gap-[30px] md:mb-[15px] lg:mt-[initial] lg:pr-[20px]">
              <div className="product-title flex flex-col gap-[30px] md:gap-[8px]">
                <div>
                  <h1 className="text-[16px] md:text-[20px] lg:text-[24px] md:w-[210px] lg:w-[initial]">
                    UFC 43” Inches 4k UHD Smart TV
                  </h1>
                  <p className="text-[#404040] text-[12px] md:text-[16px]">
                    Black Color
                  </p>
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

              <div className="price-button-container flex flex-col gap-[4px] md:gap-[15px] self-end lg:self-center">
                <p className="text-[16px] md:text-[20px] lg:text-[24px] bg-white">
                  NGN 100,000
                </p>
                <button className="flex items-center justify-center self-end w-[30px] h-[30px] rounded-[5px] md:w-[initial] md:h-[24px] md:gap-[10px] lg:h-[30px] lg:gap-[14px] md:py-[10px] md:px-[8px] bg-[#FFE3E3] text-[#FF0000] border-[1px] border-[#FF0000] text-[16px] md:rounded-[8px]">
                  <span className="hidden md:block md-text-[12px] lg:text-[16px]">
                    Delete
                  </span>
                  <span>
                    <img
                      src={deleteIcon}
                      alt="deleteIcon"
                      className="lg:w-[initial] md:w-[16px] "
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="subtotal flex flex-col items-center gap-[10px] border-t-[1px]  border-t-[#4040407f] md:border-t-[0px] md:pt-[initial] md:border-l-[1px] md:border-l-[#4040407f] w-[90%] md:w-[48%] lg:w-[32%] md:px-[20px] py-[45px] md:py-[10px]">
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

            <button
              onClick={goToCheckoutOne}
              className="flex items-center justify-center h-[50px] bg-black text-[white] text-[16px] rounded-[4px] w-[100%]"
            >
              Proceed to checkout
            </button>

            <button
              onClick={goToHomePage}
              className="flex items-center justify-center h-[50px] text-[16px] border border-[#a9aaab] rounded-[4px] w-[100%]"
            >
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center gap-[50px]">
      <NavBar />
      <SearchBar />
      <div className="flex flex-col items-center gap-[20px]">
        <Cart />
        <div className="flex items-center gap-[5px] self-start">
          <h1 className="pl-[70px] text-[28px]">Similar Products</h1>
          <div className="flex items-center justify-center bg-[#EEE] w-[30px] h-[30px] rounded-full">
            <img src={arrowRight} alt="" className="hover:cursor-pointer" />
          </div>
        </div>

        <ProductData />
      </div>

      <Footer />
      
      <div className="flex justify-center w-100% mt-[50px]">
        <MobileBottomNavBar />
      </div>
    </div>
  );
};

export default CartOne;
