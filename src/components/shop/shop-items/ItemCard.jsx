import pic1 from "../../../assets/product-category/গৃহস্থালী-পণ্য-4429.jpg";

const ItemCard = () => {
  return (
    <div className="text-center mx-2 space-y-2 bg-white border-0 pb-12 mb-2 hover:shadow-lg">
      <img src={pic1} alt="গৃহস্থালি পণ্য" />
      <div className="text-xs opacity-45 hover:opacity-100 bg-white">
        থ্রী পিছ
      </div>
      <div className="text-[#007cea] bg-white">
        ডিজিটাল প্রিন্ট বডি এমব্রয়েডারি সাথে সিকুয়েন্সের কাজ থ্রী পিছ
      </div>
      <div className="text-[#fe4e00] bg-white">৳ 1450</div>
      <div className="text-xs opacity-45 bg-white">Was ৳ 1850</div>
    </div>
  );
};

export default ItemCard;
