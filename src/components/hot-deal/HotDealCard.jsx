import pic1 from "../../assets/product-category/স্বাস্থ্য-সুরক্ষা-পণ্য-8524.webp";

const HotDealCard = () => {
  return (
    <div className="mx-2 bg-white border-0 mb-2 hover:shadow-lg">
      <img src={pic1} alt="গৃহস্থালি পণ্য" />
      <div className="bg-secondary w-full py-1 text-white">অর্ডার করুন</div>
      <div className="bg-secondary w-full py-1 text-white">অর্ডার করুন</div>
      <div className="space-y-2 bg-white text-center">
        <div className="bg-secondary w-14 mx-auto">৳ 480 </div>
        <div className="bg-white">Was ৳ 1490</div>
        <div className="bg-white">Comfortable Cotton</div>
      </div>
    </div>
  );
};

export default HotDealCard;
