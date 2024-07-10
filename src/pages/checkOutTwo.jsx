import logoWhite from "../assets/logoWhite.svg";
import favoriteIconWhite from "../assets/favoriteIconWhite.svg";
import shoppingCartWhite from "../assets/shoppingCartWhite.svg";
import arrowDownWhite from "../assets/arrowDownWhite.svg";
import CheckOutNavBar from "../components/checkOutNavBar";
import OrderIDBar from "../components/orderIDBar";
import OrderedTV from "../components/orderedTV";
import OrderedTVPayment from "../components/orderedTVPayment";
import OrderSummary from "../components/orderSummary";
import Footer from "../components/footer";
import MobileBottomNavBar from "../components/MobileBottomNavBar";
import questionMarkIcon from "../assets/questionMarkIcon.svg";
import tickGoodIcon from "../assets/tickGoodIcon.svg";
import iconCancelWhite from "../assets/iconCancelWhite.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const CheckOutTwo = () => {

  const navigate = useNavigate();

  const goToCheckoutThree = (e) => {
    e.preventDefault();
    navigate("/CheckOutThree");
  };
  

  const [show, setShow] = useState("hidden");
  const toggleShow = () => {
    if (show === "hidden") {
      setShow("flex")
    } else {
      setShow("hidden")
    }
  };
  
  

  const CheckOutButton = () => {
    return (
      <button
        onClick={toggleShow}
        className="flex items-center justify-center bg-black text-white text-[16px] rounded-[4px] lg:rounded-[8px] py-[20px] w-[94%] md:w-[60%] lg:w-[40%]"
      >
        Pay now
      </button>
    );
  };


  const PaymentConfirmation = () => {
    

    return (
      <div
        className={`${show} paymentConfirmation-container flex items-center justify-center w-[100%] h-[100vh] fixed z-[10] bottom-[0]`}
      >
        <div
          className={`confirm-payment flex flex-col gap-[10px] bg-white p-[35px] w-[450px] h-[250px] border rounded-[10px]`}
        >
          <div className="flex items-center justify-center flex-col gap-[10px]">
            <div className="flex items-center justify-center rounded-full">
              <img
                src={questionMarkIcon}
                alt="questionMarkIcon"
                className="w-[50px] h-[50px]"
              />
            </div>
            <p className="text-black text-[20px]">
              Are you sure you want to proceed with the order?
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={goToCheckoutThree}
              className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-black"
            >
              <img src={tickGoodIcon} alt="tickGoodIcon" />
            </button>

            <button
              onClick={toggleShow}
              className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#a9aaab]"
            >
              <img src={iconCancelWhite} alt="iconCancelWhite" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  

  return (
    <div className="main-container flex flex-col gap-[30px] w-[100%]">
      <CheckOutNavBar
        className={"bg-[#404040] logoIcon"}
        logoIcon={logoWhite}
        paraClassName={"text-white"}
        iconFavorite={favoriteIconWhite}
        cartIcon={shoppingCartWhite}
        downArrow={arrowDownWhite}
      />

      <div>
        <OrderIDBar />
      </div>

      <div>
        <OrderedTV />
      </div>

      <div>
        <OrderedTVPayment />
      </div>

      <div>
        <OrderSummary />
      </div>

      <div className="flex items-center justify-center w-[100]">
        <PaymentConfirmation />
      </div>

      <div className="flex items-center justify-center w-[100] pb-[200px]">
        <CheckOutButton />
      </div>

      <div className="flex items-center justify-center w-[100] lg:px-[64px]">
        <Footer />
        <MobileBottomNavBar />
      </div>
    </div>
  );
};
export default CheckOutTwo;
