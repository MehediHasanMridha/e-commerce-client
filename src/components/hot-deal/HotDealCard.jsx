import pic1 from "../../assets/product-category/গৃহস্থালী-পণ্য-4429.jpg";

const HotDealCard = () => {
  return (
    <div className="mx-2 space-y-2 bg-white border-0 mb-2 hover:shadow-lg">
      <img src={pic1} alt="গৃহস্থালি পণ্য" />
      <button className="bg-[#fe4e00] w-full py-1 text-white">
        অর্ডার করুন
      </button>
      <div className="space-y-2 bg-white text-center">
        <div className="bg-[#fe4e00] w-14 mx-auto">৳ 480 </div>
        <div className="bg-white">Was ৳ 1490</div>
        <div className="bg-white">Comfortable Cotton</div>
      </div>
    </div>
  );
};

export default HotDealCard;
