import { CartSVG } from "../SVG/CartSVG";

function AccountSection() {
  return (
    <div className="px-[12px]">
      <div className="relative">
        <CartSVG />
        <span className="w-5 h-5 top-2 -right-5 rounded-full flex items-center justify-center bg-red-500 text-white text-sm absolute">
          8
        </span>
      </div>
    </div>
  );
}

export default AccountSection;
