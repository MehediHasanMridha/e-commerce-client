import ProductCategoryCard from "./ProductCategoryCard";
import ProductCategoryTitle from "./ProductCategoryTitle";

const ProductCategory = () => {
  return (
    <div className="mx-[172px]">
      <ProductCategoryTitle />
      <div className="w-full border mt-4 mb-6"></div>
      <ProductCategoryCard />
    </div>
  );
};

export default ProductCategory;
