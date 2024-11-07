import { BsSearch } from "react-icons/bs";
function SearchSection() {
  return (
    <div className="gap-2 hidden h-[46px] bg-red-400 lg:block relative">
      <input
        type="text"
        placeholder="সার্চ করুন...."
        className="p-2 border-[1px] placeholder:text-black h-full border-secondary w-[450px] xl:w-[600px] focus:outline-none"
      />
      <div className="absolute h-full p-2 bg-secondary w-14 text-white flex items-center justify-center right-0 top-0">
        <BsSearch />
      </div>
    </div>
  );
}

export default SearchSection;
