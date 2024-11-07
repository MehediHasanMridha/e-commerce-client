import BottomHeader from "./BottomHeader";
import Slider from "./Slider";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <div>
      <TopHeader />
      <BottomHeader />
      <div className="px-[12px] lg:flex justify-end w-full xl:w-[1170px] mx-auto">
        <Slider />
      </div>
    </div>
  );
}

export default Header;
