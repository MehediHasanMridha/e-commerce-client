import ProductCategoryCard from "./ProductCategoryCard";
import ProductCategoryTitle from "./ProductCategoryTitle";

const ProductCategory = () => {
  return (
    <div className="container mx-auto">
      <div>
        <ProductCategoryTitle />
        <div className="w-full border mt-4 mb-6"></div>
        <ProductCategoryCard />
      </div>
    </div>
  );
};

export default ProductCategory;
