import visaCardIcon from "../assets/visaCardIcon.svg";


const OrderedTVPayment = () => {
  return (
    <div className="payment-shipment-main-container p-[20px] w-[100%] px-[15px] md:px-[20px]">
      <div className="payment-shipment-sub-container flex justify-between w-[100%]">
        <div className="payment-container flex flex-col gap-[10px] w-[47%] md:w-[60%] lg:w-[80%]">
          <div className="payment-text">
            <h1 className="text-[17px] md:text-[20px] lg:text-[24px] text-[#000]">
              Payment
            </h1>
          </div>

          <div className="visaCard-container flex items-center gap-[7px] md:gap-[10px]">
            <p className="text-[12px] md:text-[24px] text-[#404040]">Visa</p>
            <p className="text-[12px] md:text-[24px] text-[#000]">5134***3421</p>
            <img src={visaCardIcon} alt="visaCardIcon" className="w-[41px] md:w-[initial]"/>
          </div>
        </div>

        <div className="shipment-container flex flex-col gap-[10px] w-[53%] md:w-[40%] lg:w-[20%]">
          <div className="shipment-text">
            <h1 className="text-[17px] md:text-[20px] lg:text-[24px] text-[#000]">
              Shipment
            </h1>
          </div>

          <div className="address text-[#404040]">
            <p className="text-[11px] md:text-[14px] lg:text-[20px]">Address</p>
            <p className="text-[13px] md:text-[16px] lg:text-[18px]">
              Street: No. 23 Testimonial Street, Umuahia, Abia State.
            </p>
            <p className="text-[13px] md:text-[16px] lg:text-[18px]">
              Country: Nigeria NG (NGN)
            </p>
            <p className="text-[13px] md:text-[16px] lg:text-[18px]">
              {" "}
              Phone number: 09058421909
            </p>
          </div>

          <div className="flex flex-col gap-[3px] text-[#404040]">
            <p className="text-[11px] md:text-[14px] lg:text-[16px]">Delivery method</p>
            <p className="text-[13px] md:text-[16px] lg:text-[18px]">
              Swift delivery (4-8 hours)
            </p>
            <p className="text-[14px] md:text-[17px] lg:text-[18px]">Price: NGN 12,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderedTVPayment;