import ProductCategoryCard from "./ProductCategoryCard";
import ProductCategoryTitle from "./ProductCategoryTitle";

const ProductCategory = () => {
  return (
    <div className="px-2">
      <ProductCategoryTitle />
      <div className="w-full h-[0.1px] bg-gray-200"></div>
      <ProductCategoryCard />
    </div>
  );
};

export default ProductCategory;
