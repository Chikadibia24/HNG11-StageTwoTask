import arrowDownGray from "../assets/arrowDownGray.svg";
import lighteningSpeedIcon from "../assets/lighteningSpeedIcon.svg";
import deliveryIcon from "../assets/deliveryIcon.svg";
import cardIcon from "../assets/cardIcon.svg";
import tickGoodIcon from "../assets/tickGoodIcon.svg";
import bankIcon from "../assets/bankIcon.svg";
import googlePayIcon from "../assets/googlePayIcon.svg";


const PaymentForm = ({onClick}) => {

  const Headings = ({h1Text,paraText,divClassName}) => {
    return (
      <div className={`${divClassName} flex flex-col w-[100%]`}>
        <h1 className="mb-[-5px]  text-black text-[20px] lg:text-[24px]">{h1Text}</h1>
        <a href="#">
          <p className="text-[#404040] text-[14px] lg:text-[18px]">{paraText}</p>
        </a>
      </div>
    );
  }

  const Inputs = ({label,type, id, name, placeholder, divInputClass, inputClassName, imageClassName,icon}) => {
    return (
      <div className="flex flex-col justify-center w-[100%]">
        <label htmlFor={id} className="text-[14px] lg:text-[18px] text-[#404040]">
          {label}
        </label>

        <div
          className={`${divInputClass} div-input-container flex items-center justify-between border border-[#a9aaab] rounded-[4px]`}
        >
          <input
            type={type}
            id={id}
            name={name}
            value={placeholder}
            className={`${inputClassName} py-[8px] h-[45px] px-[6px] lg:px-[10px]`}
          />
          <img src={icon} alt={icon} className={`${imageClassName} w-[16px] lg:w-[initial] pr-[6px] lg:pr-[10px] hover:cursor-pointer`} />
        </div>
      </div>
    );
  }

  const ShippingMethod = ({
    shippingMethodsClassName,
    iconDivClassName,
    icon,
    h1Text,
    paraText,
    radioID,
    radioValue,
  }) => {
    return (
      <div
        className={`shippingMethods flex items-center justify-between py-[6px] lg:py-[8px] px-[10px] lg:px-[20px] rounded-[4px] ${shippingMethodsClassName}`}
      >
        <div className="flex items-center gap-[10px]">
          <div
            className={`flex items-center justify-center w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] rounded-full ${iconDivClassName}`}
          >
            <img src={icon} alt={icon} />
          </div>

          <div>
            <h1 className="text-black text-[15px] md:text-[17px] lg:text-[20px]">{h1Text}</h1>
            <p className="text-[#404040] text-[11px] md:text-[13px] lg:text-[16px]">{paraText}</p>
          </div>
        </div>

        <div>
          <input
            type="radio"
            name="shipping-method"
            id={radioID}
            value={radioValue}
            className="accent-[#000000]"
          />
        </div>
      </div>
    );
  };


  const PaymentButton = ({buttonClassName,icon,text,topIconClassName,topIcon}) => {
    return (
      <button
        className={`flex items-center justify-center gap-[6px] md:gap-[8px] py-[15px] px-[6px] md:px-[10px] rounded-[4px] lg:h-[38px] lg:py-[16px] ${buttonClassName}`}
      >
        <span>
          <img src={icon} alt={icon} />
        </span>

        <span className="text-[8px] md:text-[14px] lg:text-[15px] text-[#404040]">{text}</span>
        <div
          className={`flex items-center justify-center h-[18px] w-[18px] lg:h-[23px] lg:w-[23px] rounded-full bg-black ${topIconClassName}`}
        >
          <img src={topIcon} alt={topIcon} className="w-[15px] h-[11px]"/>
        </div>
      </button>
    );
  }

  const CheckBox = () =>{
    return (
      <div className="flex items-center gap-[6px]">
        <input
          type="checkbox"
          name="saveDetails"
          id="saveDetails"
          value="my-details"
          className="accent-[#000000]"
        />
        <p className="text-black text-[14px] md:text-[15px] lg:text-[18px]">
          Save my details for future purchases
        </p>
      </div>
    );
  }

  const SubmitButton = () => {
    return (
      <button onClick={onClick} className="flex items-center justify-center self-center bg-black py-[20px] px-[10px] text-white text-[16px] rounded-[4px] w-[100%] lg:w-[89%]">
        Proceed to checkout
      </button>
    );
  }


  return (
    <form className="flex flex-col gap-[20px] pb-[130px] w-[100%]">
      <Headings
        h1Text={"Your details"}
        paraText={"Farchika54@gmail.com"}
        divClassName={"border-b border-[#a9aaab] pb-[8px]"}
      />

      <div className="deliver-details-inputs-container flex flex-col gap-[15px] w-[100%]">
        <Headings h1Text={"Delivery details"} />

        <div className="firstLastName-input-container flex items-center justify-between w-[100%] gap-[15px]">
          <Inputs
            label={"First Name"}
            type={"text"}
            id={"firstName"}
            name={"firstName"}
            placeholder={"Casmir"}
            divInputClass={"w-[100%]"}
            inputClassName={"w-[100%]"}
          />

          <Inputs
            label={"Last Name"}
            type={"text"}
            id={"lastName"}
            name={"lastName"}
            placeholder={"Daniyan"}
            divInputClass={"w-[100%]"}
            inputClassName={"w-[100%]"}
          />
        </div>

        <Inputs
          label={"State"}
          type={"text"}
          id={"state"}
          name={"state"}
          placeholder={"Abia State"}
          divInputClass={"w-[100%] gap-[6px]"}
          inputClassName={"w-[95%]"}
          imageClassName={"w-[4%]"}
          icon={arrowDownGray}
        />

        <Inputs
          label={"Full Address"}
          type={"text"}
          id={"address"}
          name={"address"}
          placeholder={"No. 23 Testimonial Street, Umuahia"}
          divInputClass={"w-[100%]"}
          inputClassName={"w-[100%]"}
        />

        <Inputs
          label={"Phone number"}
          type={"number"}
          id={"phone"}
          name={"phone"}
          placeholder={"00000000"}
          divInputClass={"w-[100%]"}
          inputClassName={"w-[100%]"}
        />
      </div>

      <div className="shipping-method-inputs-container flex flex-col gap-[15px] w-[100%]">
        <Headings h1Text={"Shipping method"} />

        <div className="shipping-method-radio-buttons-container flex flex-col gap-[12px]">
          <ShippingMethod
            shippingMethodsClassName={
              "bg-[#ecececb2] border-[0.5px] border-[#404040]"
            }
            iconDivClassName={"bg-[white]"}
            icon={lighteningSpeedIcon}
            h1Text={"Swift delivery (NGN 12,000)"}
            paraText={"We ship immediately take between 4 - 8 hours"}
            radioID={"swiftDelivery"}
            radioValue={"swiftDelivery"}
          />

          <ShippingMethod
            shippingMethodsClassName={"bg-[#ffffff] border border-[#4040407f]"}
            iconDivClassName={"bg-[#EEE]"}
            icon={deliveryIcon}
            h1Text={"Standard delivery (NGN 5,000)"}
            paraText={"We ship immediately take between 2 - 7 working days"}
            radioID={"standardDelivery"}
            radioValue={"standardDelivery"}
          />
        </div>
      </div>

      <div className="paymentMethod-container flex flex-col gap-[15px]">
        <Headings h1Text={"Payment method"} />

        <div className="paymentOptionsButtons-container flex justify-between  gap-[50px] items-center my-[30px]">
          <PaymentButton
            buttonClassName={
              "absolute z-0 left-[15px] md:left-[23px] pl-[30px] pr-[5px] bg-[#ecececb2] border-[1px] border-[#404040] lg:left-[66px] lg:w-[145px]"
            }
            icon={cardIcon}
            text={"Card"}
            topIconClassName={
              "relative top-[-25px] left-[15px] lg:top-[-20px] lg:left-[31px]"
            }
            topIcon={tickGoodIcon}
          />

          <PaymentButton
            buttonClassName={
              "absolute z-0 left-[150px] md:left-[145px] lg:left-[235px] border border-[#404040] px-[18px] md:w-[151px] lg:w-[181px]"
            }
            icon={bankIcon}
            text={"Bank transfer"}
            topIconClassName={"hidden"}
          />

          <PaymentButton
            buttonClassName={
              "absolute z-0 left-[292px] md:left-[310px] lg:left-[442px] border border-[#404040] px-[18px] md:w-[145px] lg:w-[168px]"
            }
            icon={googlePayIcon}
            text={"Google pay"}
            topIconClassName={"hidden"}
          />
        </div>

        <div className="cardDetails-container flex flex-col gap-[15px] w-[100%]">
          <Inputs
            label={"Card holder's name*"}
            type={"text"}
            id={"holder"}
            name={"holder"}
            placeholder={"Casmir Daniyan"}
            divInputClass={"w-[100%]"}
            inputClassName={"w-[100%]"}
          />

          <Inputs
            label={"Card number*"}
            type={"number"}
            id={"cad-n"}
            name={"cad-n"}
            placeholder={"00000000000"}
            divInputClass={"w-[100%]"}
            inputClassName={"w-[100%]"}
          />

          <div className="flex items-center justify-between w-[100%] gap-[15px]">
            <Inputs
              label={"Expiration date*"}
              type={"date"}
              id={"exp-date"}
              name={"exp-date"}
              placeholder={"01/25"}
              divInputClass={"w-[100%]"}
              inputClassName={"w-[100%]"}
            />

            <Inputs
              label={"CVV*"}
              type={"number"}
              id={"c-v-v"}
              name={"c-v-v"}
              placeholder={"000"}
              divInputClass={"w-[100%]"}
              inputClassName={"w-[100%] "}
            />
          </div>
        </div>

        <div className="checkbox-container w-[100%]">
          <CheckBox />
        </div>
      </div>

      <SubmitButton />
    </form>
  );
}

export default PaymentForm;