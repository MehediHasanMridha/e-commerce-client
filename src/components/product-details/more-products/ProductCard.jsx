/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="text-center lg:w-[275px] min-h-[460px] mx-2 space-y-2 bg-white border-0 pb-8 mb-2 hover:shadow-lg">
      <div className="relative">
        <img src={product.img} alt={product.title} className="w-full" />
        <div className="absolute top-6 left-6 px-2 py-1 bg-[#fe4e00] text-white">
          New
        </div>
      </div>
      <p className="opacity-35 hover:opacity-100 bg-white">{product.title}</p>
      <div className="text-[#007cea] bg-white">{product.description}</div>
      <div className="flex gap-2 bg-white justify-center items-center">
        <p className="text-[#fe4e00] bg-white text-2xl">{product.price}</p>
        <p className="text-xs opacity-45 bg-white text-2xl">
          {product.beforePrice}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
