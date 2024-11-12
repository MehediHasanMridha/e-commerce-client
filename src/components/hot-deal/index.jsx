import HotDealSlider from "./HotDealSlider";
import HotDealTitle from "./HotDealTitle";

const HotDeal = () => {
  return (
    <div className="px-2">
      <HotDealTitle />
      <div className="w-full h-[0.1px] bg-gray-200"></div>
      <HotDealSlider />
    </div>
  );
};

export default HotDeal;
