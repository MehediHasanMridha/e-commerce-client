import MoreProducts from "./more-products/index";
import ProductInformation from "./product-information/index";

const ProductDetails = () => {
  return (
    <div className="lg:mx-[172px]">
      <ProductInformation />
      <MoreProducts />
    </div>
  );
};

export default ProductDetails;
