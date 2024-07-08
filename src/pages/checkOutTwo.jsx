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

const CheckOutTwo = () => {

  const CheckOutButton = () => {
    return (
      <button className="flex items-center justify-center bg-black text-white text-[16px] rounded-[4px] py-[15px] w-[40%]">Pay now</button>
    )
  }


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
        <OrderedTV/>
      </div>

      <div>
        <OrderedTVPayment/>
      </div>

      <div>
        <OrderSummary/>
      </div>

      <div className="flex items-center justify-center w-[100] pb-[100px]">
        <CheckOutButton/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};
export default CheckOutTwo;
