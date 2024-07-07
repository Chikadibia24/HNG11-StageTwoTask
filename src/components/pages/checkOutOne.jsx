import CheckOutNavBar from "../checkOutNavBar";
import logoWhite from "/src/assets/logoWhite.svg";
import favoriteIconWhite from "/src/assets/favoriteIconWhite.svg";
import shoppingCartWhite from "/src/assets/shoppingCartWhite.svg";
import arrowDownWhite from "/src/assets/arrowDownWhite.svg";
import PaymentForm from "../paymentForm";
import CheckOutOnePriceDetails from "../checkOutOnePriceDetails";



const CheckOutOne = () => {
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
        <div className="w-[55%] border-r border-r-[#a9aaab] p-[30px]">
          <PaymentForm />
        </div>

        <div className="w-[45%] p-[30px]">
          <CheckOutOnePriceDetails />
        </div>
      </div>
    </div>
  );
}

export default CheckOutOne;