import CheckOutNavBar from "../checkOutNavBar";
import logoWhite from "/src/assets/logoWhite.svg";
import favoriteIconWhite from "/src/assets/favoriteIconWhite.svg";
import shoppingCartWhite from "/src/assets/shoppingCartWhite.svg";
import arrowDownWhite from "/src/assets/arrowDownWhite.svg";

const CheckOutTwo = () => {
  return (
    <div className="main-container flex flex-col w-[100%]">
      <CheckOutNavBar
        className={"bg-[#404040] logoIcon"}
        logoIcon={logoWhite}
        paraClassName={"text-white"}
        iconFavorite={favoriteIconWhite}
        cartIcon={shoppingCartWhite}
        downArrow={arrowDownWhite}
      />

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default CheckOutTwo;
