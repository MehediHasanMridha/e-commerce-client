import { BiSolidRightArrowCircle } from "react-icons/bi";

const ProductCategoryTitle = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center gap-1 lg:flex-row lg:justify-between lg:items-center">
        <div className="text-lg text-[#80bcf1]">প্রোডাক্ট ক্যাটেগরীজ</div>
        <div className="flex items-center gap-1">
          <button className="text-xs text-[#80bcf1] ">
            সকল প্রোডাক্ট ক্যাটেগরীজ
          </button>
          <span>
            <BiSolidRightArrowCircle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryTitle;
