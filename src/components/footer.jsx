import paymentImage from "../assets/paymentImage.png";
import facebookIcon from "../assets/facebookIcon.svg";
import linkedInIcon from "../assets/linkedInIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import logo from "../assets/logo.svg"
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();

  const goToHomePage = (e) => {
    e.preventDefault();
    navigate("/");
  };


  const BlackCircle = ({ image, altText }) => {
    return (
      <div className="flex items-center justify-center bg-[#000] text-[#dbdbdbdb] w-[44px] h-[44px] rounded-full hover:cursor-pointer">
        <img src={image} alt={altText} />
      </div>
    );
  };
  

  const HeadingText = ({h1Text}) => {
      return <h1 className="text-[20px]">{h1Text}</h1>;
  }
  

  const Paragraph = ({paraText}) => {
    return (
      <a href="#" className="footer-links">
        <p className="text-white text-[16px]">{paraText}</p>
      </a>
    );
    }

  return (
    <footer className="footer flex-col gap-[32px] hidden md:flex justify-center items-center h-[550px] w-[96%] bg-[#DBDBDB] lg:p-[32px] rounded-[32px]">
      <div className="flex items-center justify-between w-[96%] p-[10px] pr-[20px] pl-[20px]">
        <button
          onClick={goToHomePage}
          className="flex items-center md:gap-[6px] lg:gap-[8px]"
        >
          <img src={logo} alt="logo" className="md:w-[40px] lg:w-[45px]" />
          <div className="flex flex-col items-start">
            <p className="text-black md:text-[20px] lg:text-[24px] mb-[-5px]">
              Danchika
            </p>

            <p className="text-black md:text-[20px] lg:text-[24px] mt-[-5px]">
              Electronics
            </p>
          </div>
        </button>

        <div className="flex md:flex-col lg:flex-row lg:justify-around md:w-[74%] lg:w-[65%] gap-[15px] bg-[#606060] text-white py-[32px] rounded-[32px]">
          <div className="flex flex-col gap-[8px] text-white md:pl-[20px] lg:pl-[0px]">
            <HeadingText h1Text={"Account"} />
            <div className="flex md:flex-row lg:flex-col md:gap-[10px] lg:gap-[15px]">
              <Paragraph paraText={"Wishlist"} />
              <Paragraph paraText={"Cart"} />
              <Paragraph paraText={"Track Order"} />
              <Paragraph paraText={"Shopping Details"} />
            </div>
          </div>

          <div className="flex flex-col gap-[8px] text-white md:pl-[20px] lg:pl-[0px]">
            <HeadingText h1Text={"Useful Links"} />
            <div className="flex md:flex-row lg:flex-col md:gap-[10px] lg:gap-[15px]">
              <Paragraph paraText={"About Us"} />
              <Paragraph paraText={"Contact"} />
              <Paragraph paraText={"Hot Deals"} />
              <Paragraph paraText={"Promotion"} />
              <Paragraph paraText={"New Products"} />
            </div>
          </div>

          <div className="flex flex-col gap-[8px] text-white md:pl-[20px] lg:pl-[0px]">
            <HeadingText h1Text={"Help center"} />
            <div className="flex md:flex-row lg:flex-col md:gap-[10px] lg:gap-[15px]">
              <Paragraph paraText={"Payments"} />
              <Paragraph paraText={"Refund"} />
              <Paragraph paraText={"Checkout"} />
              <Paragraph paraText={"Shopping"} />
              <Paragraph paraText={"Q&A"} />
              <Paragraph paraText={"Privacy Policy"} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-[96%] bg-[#606060] h-[70px] p-[24px] rounded-[40px]">
        <div>
          <p className="text-white">© 2024, All rights reserved</p>
        </div>

        <div>
          <img src={paymentImage} alt="paymentImage" />
        </div>

        <div className="flex items-center gap-[5px]">
          <BlackCircle image={facebookIcon} altText={facebookIcon} />
          <BlackCircle image={linkedInIcon} altText={linkedInIcon} />
          <BlackCircle image={instagramIcon} altText={instagramIcon} />
          <BlackCircle image={twitterIcon} altText={twitterIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
