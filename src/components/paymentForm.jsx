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
        <h1 className="mb-[-5px]  text-black md:text-[20px] lg:text-[24px]">{h1Text}</h1>
        <a href="#">
          <p className="text-[#404040] md:text-[14px] lg:text-[18px]">{paraText}</p>
        </a>
      </div>
    );
  }

  const Inputs = ({label,type, id, name, placeholder, divInputClass, inputClassName, imageClassName,icon}) => {
    return (
      <div className="flex flex-col justify-center w-[100%]">
        <label htmlFor={id} className="md:text-[14px] lg:text-[18px] text-[#404040]">
          {label}
        </label>

        <div
          className={`${divInputClass} div-input-container flex items-center justify-between border border-[#a9aaab]`}
        >
          <input
            required
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className={`${inputClassName} py-[3px] md:px-[6px] lg:px-[10px]`}
          />
          <img src={icon} alt={icon} className={`${imageClassName} md:w-[16px] lg:w-[initial] md:pr-[6px] lg:pr-[10px] hover:cursor-pointer`} />
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
        className={`shippingMethods flex items-center justify-between md:py-[6px] lg:py-[8px] md:px-[10px] lg:px-[20px] rounded-[4px] ${shippingMethodsClassName}`}
      >
        <div className="flex items-center gap-[10px]">
          <div
            className={`flex items-center justify-center md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] rounded-full ${iconDivClassName}`}
          >
            <img src={icon} alt={icon} />
          </div>

          <div>
            <h1 className="text-black md:text-[17px] lg:text-[20px]">{h1Text}</h1>
            <p className="text-[#404040] md:text-[13px] lg:text-[16px]">{paraText}</p>
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
        className={`flex items-center justify-center gap-[8px] py-[10px] px-[10px] rounded-[4px] ${buttonClassName}`}
      >
        <span>
          <img src={icon} alt={icon} />
        </span>

        <span className="md:text-[14px] lg:text-[16px] text-[#404040]">{text}</span>
        <div
          className={`flex items-center justify-center md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] rounded-full bg-black ${topIconClassName}`}
        >
          <img src={topIcon} alt={topIcon} className="md:w-[13px] lg:w-[initial]"/>
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
        <p className="text-black md:text-[15px] lg:text-[18px]">
          Save my details for future purchases
        </p>
      </div>
    );
  }

  const SubmitButton = () => {
    return (
      <button onClick={onClick} className="flex items-center justify-center self-center bg-black py-[10px] px-[10px] text-white text-[16px] rounded-[4px] md:w-[100%] lg:w-[80%]">
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
          id={"phoneNumber"}
          name={"phoneNumber"}
          placeholder={"00000000"}
          divInputClass={"w-[100%]"}
          inputClassName={"w-[100%]"}
        />
      </div>

      <div className="shipping-method-inputs-container flex flex-col gap-[15px] w-[100%]">
        <Headings h1Text={"Shipping method"} />

        <div className="shipping-method-radio-buttons-container flex flex-col gap-[12px]">
          <ShippingMethod
            shippingMethodsClassName={"bg-[#a9aaab]"}
            iconDivClassName={"bg-[white]"}
            icon={lighteningSpeedIcon}
            h1Text={"Swift delivery (NGN 12,000)"}
            paraText={"We ship immediately take between 4 - 8 hours"}
            radioID={"swiftDelivery"}
            radioValue={"swiftDelivery"}
          />

          <ShippingMethod
            shippingMethodsClassName={"bg-[#ffffff] border border-[#a9aaab]"}
            iconDivClassName={"bg-[#a9aaab]"}
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
              "absolute z-0 left-[30px] pl-[30px] pr-[5px] bg-[#a9aaab]"
            }
            icon={cardIcon}
            text={"Card"}
            topIconClassName={"relative top-[-20px] left-[10px]"}
            topIcon={tickGoodIcon}
          />

          <PaymentButton
            buttonClassName={
              "absolute z-0 md:left-[175px] lg:left-[190px] border border-[#a9aaab]"
            }
            icon={bankIcon}
            text={"Bank transfer"}
            topIconClassName={"hidden"}
          />

          <PaymentButton
            buttonClassName={
              "absolute z-0 md:left-[330px] lg:left-[365px] border border-[#a9aaab]"
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
            id={"cardHolderName"}
            name={"cardHolderName"}
            placeholder={"Casmir Daniyan"}
            divInputClass={"w-[100%]"}
            inputClassName={"w-[100%]"}
          />

          <Inputs
            label={"Card number*"}
            type={"number"}
            id={"cardNumber"}
            name={"cardNumber"}
            placeholder={"00000000000"}
            divInputClass={"w-[100%]"}
            inputClassName={"w-[100%]"}
          />

          <div className="flex items-center justify-between w-[100%] gap-[15px]">
            <Inputs
              label={"Expiration date*"}
              type={"date"}
              id={"expirationDate"}
              name={"expirationDate"}
              placeholder={"01/25"}
              divInputClass={"w-[100%]"}
              inputClassName={"w-[100%]"}
            />

            <Inputs
              label={"CVV*"}
              type={"number"}
              id={"cvv"}
              name={"cvv"}
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