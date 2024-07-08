import "../App.css";
import arrowUpSlant from "../assets/arrowUpSlant.svg";
import orderIssuesIcon from "../assets/orderIssuesIcon.svg";
import orderReturnIcon from "../assets/orderReturnIcon.svg";
import cardIcon from "../assets/cardIcon.svg";
import deliveryIcon from "../assets/deliveryIcon.svg";
import infoIcon from "../assets/infoIcon.svg";

const OrderSummary = () => {
  const NeedHelp = ({ icon, text }) => {
    return (
      <div className="flex items-center gap-[6px]">
        <img src={icon} alt={icon} className="hover:cursor-pointer" />
        <a href="#">
          <p className="text-[18px] text-[#404040] hover:underline">{text}</p>
        </a>
        <img
          src={arrowUpSlant}
          alt="arrowUpSlant"
          className="hover:cursor-pointer"
        />
      </div>
    );
  };

  const Summary = ({ className, text1, icon, text2 }) => {
    return (
      <div className={`flex items-center justify-between ${className}`}>
        <p className="flex items-center gap-[2px]">
          {text1}
          <img src={icon} alt={icon} />
        </p>
        <p>{text2}</p>
      </div>
    );
  };

  return (
    <div className="needHelp-summary-container flex justify-between px-[20px] w-[100%]">
      <div className="needHelp-container flex flex-col gap-[6px] w-[70%]">
        <div className="need-help">
          <h1 className="text-[24px] text-black">Need Help?</h1>
        </div>

        <NeedHelp icon={orderIssuesIcon} text={"Order issues"} />

        <NeedHelp icon={cardIcon} text={"Payment issues"} />

        <NeedHelp icon={deliveryIcon} text={"Delivery issues"} />

        <NeedHelp icon={orderReturnIcon} text={"Return issues"} />
      </div>

      <div className="summary-container flex flex-col gap-[8px] w-[20%]">
        <div>
          <h1 className="text-black text-[24px]">Summary</h1>
        </div>

        <div>
          <Summary
            className={"text-[20px] text-[#000]"}
            text1={"Subtotal"}
            text2={"NGN 100,000"}
          />
        </div>

        <div>
          <Summary
            className={"text-[16px] text-[#404040]"}
            text1={"Discount"}
            text2={"(20%) -NGN 20,000"}
          />
        </div>

        <div>
          <Summary
            className={"text-[16px] text-[#404040]"}
            text1={"Shipment"}
            text2={"Swift -NGN 12,000"}
          />
        </div>

        <div className="pb-[10px]">
          <Summary
            className={"text-[16px] text-[#404040]"}
            text1={"VAT"}
            icon={infoIcon}
            text2={"NGN 7,000"}
          />
        </div>

        <div className="total-container">
          <Summary
            className={"text-[20px] text-[#000]"}
            text1={"Total"}
            text2={"NGN 99,000"}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;