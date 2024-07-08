import { useNavigate } from "react-router-dom";
import CheckOutNavBar from "../components/checkOutNavBar";
import logoWhite from "../assets/logoWhite.svg";
import favoriteIconWhite from "../assets/favoriteIconWhite.svg";
import shoppingCartWhite from "../assets/shoppingCartWhite.svg";
import arrowDownWhite from "../assets/arrowDownWhite.svg";
import PaymentForm from "../components/paymentForm";
import CheckOutOnePriceDetails from "../components/checkOutOnePriceDetails";
import Footer from "../components/footer";

const CheckOutOne = () => {


  const navigate = useNavigate();

  const goToCheckoutTwo = () => {
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

      <div className="flex w-[100%]">
        <div className="md:w-[62%] lg:w-[55%] border-r border-r-[#a9aaab] md:px-[20px] md:pt-[30px] lg:p-[30px]">
          <PaymentForm onClick={goToCheckoutTwo} />
        </div>

        <div className=" md:w-[38%] lg:w-[45%] md:px-[20px] md:pt-[30px] lg:p-[30px]">
          <CheckOutOnePriceDetails />
        </div>
      </div>

      <div className="w-[100%] flex flex-col items-center">
        <Footer />
      </div>
    </div>
  );
};

export default CheckOutOne;
