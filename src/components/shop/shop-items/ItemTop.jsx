import { IoIosArrowDropdown } from "react-icons/io";

const ItemTop = () => {
  return (
    <div>
      <div className="flex gap-2 justify-center items-center lg:justify-end lg:pr-4 py-7">
        <p className="text-[#007cea] text-xs">Sort by: </p>

        <div className="text-xs opacity-50 relative">
          <select className="block appearance-none w-[141px] bg-white border border-gray-300 text-gray-700 py-1 px-2 pr-2 rounded leading-tight focus:outline-none ">
            <option value="1">Default Sort</option>
            <option selected value="2">
              Price - lower to higher
            </option>
            <option value="2">Price - higher to lower</option>
            <option value="3">Alphabet Ascending</option>
            <option value="3">Alphabet Descending</option>
            <option value="2">Discount - lower to higher</option>
            <option value="2">Discount - higher to lower</option>
          </select>
          <IoIosArrowDropdown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#007cea] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default ItemTop;
