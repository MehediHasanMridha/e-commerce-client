import ShopItem from "./shop-items";
import ShopMenu from "./shop-menu/index";

const Shop = () => {
  return (
    <div className="lg:mx-[172px] md:flex md:gap-6">
      <ShopMenu />
      <div className="flex-1">
        <ShopItem />
      </div>
    </div>
  );
};

export default Shop;
