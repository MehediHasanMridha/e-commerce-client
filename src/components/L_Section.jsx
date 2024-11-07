import { FiMenu } from "react-icons/fi";
function L_Section() {
  return (
    <div className="hidden relative lg:flex items-center gap-4">
      <div className="bg-secondary p-4 w-[244px] flex items-center justify-between ">
        <span>ক্যাটেগোরীজ</span>
        <FiMenu className="text-2xl text-white" />
      </div>
      <ul className="absolute left-0 top-14 text-black dropdown-content border border-gray-200 bg-white  z-[1] w-64 p-2">
        <li>
          <a>গৃহস্থালি পণ্য</a>
        </li>
        <li>
          <a>স্বাস্থ্য সুরক্ষা পণ্য</a>
        </li>
        <li>
          <a>ইলেক্ট্রনিক্স পণ্য</a>
        </li>
        <li>
          <a>ছেলেদের শপিং</a>
        </li>
        <li>
          <a>মেয়েদের শপিং</a>
        </li>
        <li>
          <a>মোবাইল ও গ্যাজেট</a>
        </li>
        <li>
          <a>ফুড আইটেম</a>
        </li>
        <li>
          <a>দই মেকার</a>
        </li>
        <li>
          <a>Air pod</a>
        </li>
        <li>
          <a>All</a>
        </li>
      </ul>
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
