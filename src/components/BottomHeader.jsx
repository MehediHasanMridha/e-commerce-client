import L_Section from "./L_Section";
import R_Section from "./R_Section";

const BottomHeader = () => {
  return (
    <div className="bg-[#007cea] text-white px-2">
      <div className="xl:w-[1170px] flex justify-end lg:justify-between mx-auto">
        <L_Section />
        <R_Section />
      </div>
    </div>
  );
};

export default BottomHeader;
