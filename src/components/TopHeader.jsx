import { FiMenu } from "react-icons/fi";
import AccountSection from "./AccountSection";
import LogoSection from "./LogoSection";
import SearchSection from "./SearchSection";
const TopHeader = () => {
  return (
    <div className=" py-[25px] px-[12px] flex justify-between items-center xl:w-[1170px] mx-auto">
      <div className="flex items-center gap-x-5 ">
        <FiMenu className="text-2xl text-primary lg:hidden" />
        <LogoSection />
      </div>
      <SearchSection />
      <AccountSection />
    </div>
  );
};

export default TopHeader;
