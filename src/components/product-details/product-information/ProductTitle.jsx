const ProductTitle = () => {
  return (
    <div className="flex flex-col gap-1 items-center md:flex-row md:justify-center">
      <button className="w-[190px] pb-1 hover:text-[#FE4E00] focus:text-[#FE4E00] focus:border-b-2 focus:border-transparent focus:border-[#FE4E00] hover:border-b-2 hover:border-transparent hover:border-[#FE4E00] cursor-pointer">
        পন্যের বিবরণ
      </button>
      <button className="w-[310px] pb-1 hover:text-[#FE4E00] focus:text-[#FE4E00] border-b-2 border-transparent focus:border-[#FE4E00] hover:border-b-2 hover:border-transparent hover:border-[#FE4E00] cursor-pointer">
        ডেলিভারি এবং রিটার্ন পলিসি
      </button>
    </div>
  );
};

export default ProductTitle;
