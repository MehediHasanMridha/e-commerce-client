import { HiArrowLongRight } from "react-icons/hi2";
import ShopItem from "./shop-items";
import ShopMenu from "./shop-menu/index";

const Shop = () => {
  return (
    <>
      <div className="lg:mx-[172px] md:flex md:gap-6">
        <div className="md:basis-1/5">
          <ShopMenu />
        </div>
        <div className="md:basis-4/5">
          <ShopItem />
        </div>
      </div>
      <div className="text-center">
        <button className="btn px-6 text-gray-500 bg-white hover:bg-[#FE4E00]  hover:border-[#FE4E00] border-[#FE4E00] rounded-3xl items-center mt-6">
          View All Products <HiArrowLongRight />
        </button>
      </div>
    </>
  );
};

export default Shop;
