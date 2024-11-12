import CategoryCard from "../CategoryCard";

const ProductCategoryCard = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-6 my-6 md:grid-cols-3 md:gap-5 lg:grid-cols-6 ">
      {/* first-card */}
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      {/* second-card */}
    </div>
  );
};

export default ProductCategoryCard;
