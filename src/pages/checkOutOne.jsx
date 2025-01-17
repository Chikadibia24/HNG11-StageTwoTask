import { useNavigate } from "react-router-dom";
import CheckOutNavBar from "../components/checkOutNavBar";
import logoWhite from "../assets/logoWhite.svg";
import favoriteIconWhite from "../assets/favoriteIconWhite.svg";
import shoppingCartWhite from "../assets/shoppingCartWhite.svg";
import arrowDownWhite from "../assets/arrowDownWhite.svg";
import PaymentForm from "../components/paymentForm";
import CheckOutOnePriceDetails from "../components/checkOutOnePriceDetails";
import Footer from "../components/footer";
import MobileBottomNavBar from "../components/MobileBottomNavBar";



const CheckOutOne = () => {


  const navigate = useNavigate();

  const goToCheckoutTwo = (e) => {
    e.preventDefault();
    navigate("/checkouttwo");
  };


  return (
    <div className="flex flex-col w-[100%]">
      <CheckOutNavBar
        className={"bg-[#404040] logoIcon"}
        logoIcon={logoWhite}
        paraClassName={"text-white"}
        iconFavorite={favoriteIconWhite}
        cartIcon={shoppingCartWhite}
        downArrow={arrowDownWhite}
      />

      <div className="flex w-[100%] pt-[20px] px-[12px] md:pt-[0] md:px-[0] lg:px-[64px]">
        <div className="md:w-[62%] lg:w-[64%] md:border-r md:border-r-[#a9aaab] md:px-[20px] md:pt-[30px] lg:pt-[30px] lg:pr-[20px] lg:pl-[0px]">
          <PaymentForm onClick={goToCheckoutTwo} />
        </div>

        <div className=" md:w-[38%] lg:w-[36%] md:px-[20px] md:pt-[30px] lg:p-[15px] lg:pt-[30px] lg:pr-[0px]">
          <CheckOutOnePriceDetails />
        </div>
      </div>

      <div className="w-[100%] flex flex-col items-center lg:px-[64px]">
        <Footer />
        <MobileBottomNavBar />
      </div>
    </div>
  );
};

export default CheckOutOne;
