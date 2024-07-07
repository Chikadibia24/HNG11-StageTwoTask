import visaCardIcon from "../assets/visaCardIcon.svg";


const OrderedTVPayment = () => {
  return (
    <div className="payment-shipment-main-container p-[20px] w-[100%]">
      <div className="payment-shipment-sub-container flex justify-between w-[100%]">
        <div className="payment-container flex flex-col gap-[10px] w-[80%]">
          <div className="payment-text">
            <h1 className="text-[24px] text-[#000]">Payment</h1>
          </div>

          <div className="visaCard-container flex items-center gap-[10px]">
            <p className="text-[24px] text-[#404040]">Visa</p>
            <p className="text-[24px] text-[#000]">5134***3421</p>
            <img src={visaCardIcon} alt="visaCardIcon" />
          </div>
        </div>

        <div className="shipment-container flex flex-col w-[20%]">
          <div className="shipment-text">
            <h1 className="text-[24px] text-[#000]">Shipment</h1>
          </div>

          <div className="address  text-[#404040]">
            <p className="text-[24px]">Address</p>
            <p className="text-[18px]">
              Street: No. 23 Testimonial Street, Umuahia, Abia State. Country:
              Nigeria NG (NGN) Phone number: 09058421909
            </p>
          </div>

          <div className="text-[#404040]">
            <p className="text-[16px]">Delivery method</p>
            <p className="text-[18px]">Swift delivery (4-8 hours)</p>
            <p className="text-[18px]">Price: NGN 12,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderedTVPayment;