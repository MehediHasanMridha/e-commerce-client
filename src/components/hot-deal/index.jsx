import HotDealSlider from "./HotDealSlider";
import HotDealTitle from "./HotDealTitle";

const HotDeal = () => {
  return (
    <div className="mx-[172px] my-10">
      <HotDealTitle />
      <div className="w-full border mb-6"></div>
      <HotDealSlider />
    </div>
  );
};

export default HotDeal;
