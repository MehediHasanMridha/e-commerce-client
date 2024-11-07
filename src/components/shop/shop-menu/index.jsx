import ShopMenuBottom from "./ShopMenuBottom";
import ShopMenuTop from "./ShopMenuTop";

const ShopMenu = () => {
  return (
    <div className="hidden md:block">
      <ShopMenuTop />
      <div className="hidden lg:border"></div>
      <ShopMenuBottom />
    </div>
  );
};

export default ShopMenu;
