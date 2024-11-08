import { FiMenu } from "react-icons/fi";
import CategorySection from "./CategorySection";
function L_Section() {
  return (
    <div className="hidden relative lg:flex items-center gap-4">
      <div className="bg-secondary p-4 w-[244px] flex items-center justify-between ">
        <span>ক্যাটেগোরীজ</span>
        <FiMenu className="text-2xl text-white" />
      </div>
      <CategorySection />
      <div className="">
        <ul className="flex gap-4">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Category</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default L_Section;
