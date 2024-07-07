import CheckOutNavBar from "../checkOutNavBar";
import logoWhite from "/src/assets/logoWhite.svg";
import favoriteIconWhite from "/src/assets/favoriteIconWhite.svg";
import shoppingCartWhite from "/src/assets/shoppingCartWhite.svg";
import arrowDownWhite from "/src/assets/arrowDownWhite.svg";
import OrderIDBar from "../orderIDBar";
import OrderedTV from "../orderedTV";
import OrderedTVPayment from "../orderedTVPayment";
import OrderSummary from "../orderSummary";
import Footer from "../footer";

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
