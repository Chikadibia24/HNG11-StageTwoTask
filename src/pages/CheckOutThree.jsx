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
import successGoodTick from "../assets/successGoodTick.svg";
import { useNavigate } from "react-router-dom";



const CheckOutThree = () => {

  const navigate = useNavigate();

  const goToHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };


  const PaymentConfirmation = () => {
    return (
      <div
        className={`paymentConfirmation-container flex items-center justify-center w-[100%] h-[100vh] fixed z-[10] bottom-[0]`}
      >
        <div
          className={`confirm-payment flex flex-col gap-[30px] items-center justify-center bg-white p-[35px] w-[450px] h-[250px] border rounded-[10px]`}
        >
          <div className="flex items-center justify-center rounded-full">
            <img
              src={successGoodTick}
              alt="questionMarkIcon"
              className="w-[50px] h-[50px]"
            />
          </div>
          <p className="text-black text-[24px]">Payment Successful!!!</p>

          <button
            onClick={goToHomePage}
            className="flex items-center justify-center bg-[#a9aaab] px-[25px] py-[8px] text-[20px] rounded-[4px]"
          >
            HOME
          </button>
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

      <div className="flex w-[100%] items-center">
        <PaymentConfirmation />
      </div>

      <div className="flex items-center justify-center w-[100]">
        <Footer />
        <MobileBottomNavBar />
      </div>
    </div>
  );
};
export default CheckOutThree;
