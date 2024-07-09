import arrowLeft from "../assets/arrowLeft.svg"
import arrowRight from "../assets/arrowRight.svg";



const Pagination = () => {

  
  return (
    <div className="pagination-container flex items-center justify-between w-[89%]">
      <div className="previous flex items-center justify-start w-[25%] ">
        <button className="flex items-center justify-center gap-[6px] text-[#404040] text-[18px] h-[34px] px-[12px] border border-[#a9aaab] rounded-[4px]">
          <span>
            <img src={arrowLeft} alt="arrowLeft" />
          </span>
          <span>Previous</span>
        </button>
      </div>

      <div className="numbers flex items-center justify-center gap-[10px] w-[50%]">
        <button className="flex items-center justify-center">1</button>

        <button className="flex items-center justify-center border border-[#a9aaab] w-[27px] h-[30px] p-[10px] rounded-[4px]">
          2
        </button>

        <button className="flex items-center justify-center">3</button>

        <button className="flex items-center justify-center">...</button>

        <button className="flex items-center justify-center">4</button>

        <button className="flex items-center justify-center">5</button>

        <button className="flex items-center justify-center">6</button>
      </div>

      <div className="next flex items-center justify-end w-[25%]">
        <button className="flex items-center justify-center gap-[6px] text-[#404040] text-[18px] h-[34px] px-[12px] border border-[#a9aaab] rounded-[4px]">
          <span>Next</span>
          <span>
            <img src={arrowRight} alt="arrowRight" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Pagination