import { BiSolidRightArrowCircle } from "react-icons/bi";

const ProductCategoryTitle = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 lg:flex-row lg:justify-between lg:items-center text-primary my-2">
      <div className="text-md font-bold">প্রোডাক্ট ক্যাটেগরীজ</div>
      <div className="flex items-center gap-1">
        <div className="text-sm">সকল প্রোডাক্ট ক্যাটেগরীজ</div>
        <span>
          <BiSolidRightArrowCircle className="text-gray-400" />
        </span>
      </div>
    </div>
  );
};

export default ProductCategoryTitle;
