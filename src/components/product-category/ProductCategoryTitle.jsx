import { BiSolidRightArrowCircle } from "react-icons/bi";

const ProductCategoryTitle = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-1">
        <div className="text-lg">Product Categorize</div>
        <div className="flex items-center gap-1">
          <button className="text-xs">Sokol Product Categorize</button>
          <span>
            <BiSolidRightArrowCircle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryTitle;
