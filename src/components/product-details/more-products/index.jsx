import ProductSlider from "./ProductSlider";
import products from "./productData.js";

const MoreProducts = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-[#007cea] font-semibold mb-12">You May Also Like</h3>
      <ProductSlider products={products} />
    </div>
  );
};

export default MoreProducts;
