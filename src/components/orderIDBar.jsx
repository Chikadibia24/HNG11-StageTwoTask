import deliveryIcon from "../assets/deliveryIcon.svg";
import pencilEditIcon from "../assets/pencilEditIcon.svg";

const OrderIDBar = () => {
  return (
    <div className="orderID-editButton-container flex justify-between px-[20px] pt-[20px]">
      <div>
        <h1 className="orderID text-black text-[30px]">
          Your Order ID: HTU4736529867SF
        </h1>

        <div className="orderID-div-container flex items-center">
          <div className="order-div border-r border-r-[#a9aaab] pr-[5px]">
            <p className="order flex items-center gap-[5px] text-[16px] text-[#404040]">
              <span>Order:</span>
              <span>July 5, 2024</span>
            </p>
          </div>

          <div className="deliveryIcon-container flex items-center gap-[5px] pl-[5px]">
            <img src={deliveryIcon} alt="deliveryIcon" />
            <p className="flex items-center gap-[5px] text-[16px] text-[#000]">
              <span>Estimated delivery date:</span>
              <span>July 6, 2024</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="edit-button flex items-center justify-center gap-[6px] bg-[#a9aaab] py-[6px] px-[12px] rounded-[4px]">
          <span>
            <img src={pencilEditIcon} alt="pencilEditIcon" />
          </span>

          <span className="text-[18px] text-[#404040]">Edit detail</span>
        </button>
      </div>
    </div>
  );
};

export default OrderIDBar;
