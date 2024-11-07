import ShopItem from "./shop-items";
import ShopMenu from "./shop-menu/index";

const Shop = () => {
  return (
    <div className="lg:mx-[172px] md:flex md:gap-6">
      <div className="md:basis-1/5">
        <ShopMenu />
      </div>
      <div className="md:basis-4/5">
        <ShopItem />
      </div>
    </div>
  );
};

export default Shop;
