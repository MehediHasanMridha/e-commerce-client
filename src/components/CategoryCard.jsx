import pic1 from "../assets/product-category/স্বাস্থ্য-সুরক্ষা-পণ্য-8524.webp";

function CategoryCard() {
  return (
    <div className="mx-2 space-y-2 bg-white border-0 mb-2 hover:shadow-lg">
      <img src={pic1} alt="গৃহস্থালি পণ্য" />
      <p className="bg-transparent text-sm text-center">গৃহস্থালি পণ্য</p>
    </div>
  );
}

export default CategoryCard;
