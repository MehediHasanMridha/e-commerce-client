import ShopMenuBottom from "./ShopMenuBottom";
import ShopMenuTop from "./ShopMenuTop";

const ShopMenu = () => {
  return (
    <div className="hidden md:block md:space-y-10">
      <ShopMenuTop />
      <div className="border w-full"></div>
      <ShopMenuBottom />
    </div>
  );
};

export default ShopMenu;
