import deliveryIcon from "../assets/deliveryIcon.svg";
import pencilEditIcon from "../assets/pencilEditIcon.svg";

const OrderIDBar = () => {
  
  
  return (
    <div className="orderID-editButton-container flex justify-between px-[15px] md:px-[20px] pt-[20px] lg:px-[64px]">
      <div>
        <h1 className="orderID text-black text-[20px] md:text-[28px] lg:text-[36px]">
          Your Order ID: HTU4736529867SF
        </h1>

        <div className="orderID-div-container flex items-center">
          <div className="order-div border-r border-r-[#a9aaab] pr-[5px]">
            <p className="order flex items-center gap-[4px] md:gap-[5px] text-[11px] md:text-[13px] lg:text-[16px] text-[#404040]">
              <span>Order:</span>
              <span>July 5, 2024</span>
            </p>
          </div>

          <div className="deliveryIcon-container flex items-center gap-[4px] md:gap-[5px] pl-[4px] md:pl-[5px]">
            <img src={deliveryIcon} alt="deliveryIcon" />
            <p className="flex items-center gap-[4px] md:gap-[5px] text-[11px] md:text-[13px] lg:text-[16px] text-[#000]">
              <span>Estimated delivery date:</span>
              <span>July 6, 2024</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="edit-button flex items-center justify-center gap-[6px] bg-[#ecececb2] border-[#4040407f] border-[1px] py-[7px] px-[7px] md:px-[8px] lg:px-[12px] rounded-[5px] md:rounded-[4px]">
          <span>
            <img
              src={pencilEditIcon}
              alt="pencilEditIcon"
              className="md:w-[16px] lg:w-[initial]"
            />
          </span>

          <span className="hidden md:block md:text-[14px] lg:text-[18px] text-[#404040]">
            Edit details
          </span>
        </button>
      </div>
    </div>
  );
};

export default OrderIDBar;
