import paymentImage from "../assets/paymentImage.png";
import facebookIcon from "../assets/facebookIcon.svg";
import linkedInIcon from "../assets/linkedInIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import logo from "../assets/logo.svg"

const Footer = () => {
  const BlackCircle = ({ image, altText }) => {
    return (
      <div className="flex items-center justify-center bg-[#000] text-white w-[44px] h-[44px] rounded-full">
        <img src={image} alt={altText} />
      </div>
    );
  };

  // const FooterText = () => {
  //   return (
  //     <div className="flex flex-col gap-[15px] text-white">
  //     </div>
  //   );
  // };

  const HeadingText = ({h1Text}) => {
      return <h1 className="text-[18px]">{h1Text}</h1>;
  }
  

  const Paragraph = ({paraText}) => {
      return <p className="text-white text-[14px]">{paraText}</p>;
    }

  return (
    <footer className="footer flex flex-col gap-[32px] justify-center items-center h-[450px] w-[96%] bg-[#DBDBDB] p-[10px] rounded-[32px]">
      <div className="flex items-center justify-between w-[96%] p-[10px] pr-[20px] pl-[20px]">
        <div className="flex items-center gap-[8px]">
          <img src={logo} alt="logo" />
          <p className="text-black text-[24px]">Danchika Electronics</p>
        </div>

        <div className="flex justify-around w-[60%] gap-[15px] bg-[#606060] text-white pt-[20px] pb-[20px] rounded-[32px]">
          <div>
            <HeadingText h1Text={"Account"} />
            <Paragraph paraText={"Wishlist"} />
            <Paragraph paraText={"Cart"} />
            <Paragraph paraText={"Track Order"} />
            <Paragraph paraText={"Shopping Details"} />
          </div>

          <div className="flex flex-col gap-[15px] text-white">
            <HeadingText h1Text={"Useful Links"} />
            <Paragraph paraText={"About Us"} />
            <Paragraph paraText={"Contact"} />
            <Paragraph paraText={"Hot Deals"} />
            <Paragraph paraText={"Promotion"} />
            <Paragraph paraText={"New Products"} />
          </div>

          <div className="flex flex-col gap-[15px] text-white">
            <HeadingText h1Text={"Help center"} />
            <Paragraph paraText={"Payments"} />
            <Paragraph paraText={"Refund"} />
            <Paragraph paraText={"Checkout"} />
            <Paragraph paraText={"Shopping"} />
            <Paragraph paraText={"Q&A"} />
            <Paragraph paraText={"Privacy Policy"} />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-[96%] bg-[#606060] p-[10px] rounded-[32px]">
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
