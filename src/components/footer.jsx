import paymentImage from "../assets/paymentImage.png";
import facebookIcon from "../assets/facebookIcon.svg";
import linkedInIcon from "../assets/linkedInIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";

const Footer = () => {
  const BlackCircle = ({ image, altText }) => {
    return (
      <div className="flex items-center justify-center bg-[#000] text-white w-[44px] h-[44px] rounded-full">
        <img src={image} alt={altText} />
      </div>
    );
  };

  const Paragraph = ({paraText}) => {
      return <p className="text-white text-[14px]">{paraText}</p>;
    }

  const FooterText = ({ h1Text}) => {
    return (
      <div className="flex flex-col gap-[15px] text-white">
        <h1>{h1Text}</h1>
        <Paragraph/>
      </div>
    );
  };

  return (
    <footer className="footer flex flex-col h-[400px] w-[96%] bg-[#EEE] p-[32px]">
      
      <div>
        <div></div>

        <div>
          <FooterText h1Text={} pText={} />
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
