import pic1 from "../../assets/product-category/গৃহস্থালী-পণ্য-4429.jpg";

const ProductCategoryCard = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
        {/* first-card */}
        <div className="mx-2 space-y-2 bg-white border-0 mb-2 hover:shadow-lg">
          <img src={pic1} alt="গৃহস্থালি পণ্য" />
          <p className="bg-white text-center">গৃহস্থালি পণ্য</p>
        </div>

        {/* second-card */}
        <div className="mx-2 space-y-2 bg-white border-0 mb-2 hover:shadow-lg">
          <img src={pic1} alt="গৃহস্থালি পণ্য" />
          <p className="bg-white text-center">গৃহস্থালি পণ্য</p>
        </div>

        {/* third-Card */}
        <div className="mx-2 space-y-2 bg-white border-0 mb-2 hover:shadow-lg">
          <img src={pic1} alt="গৃহস্থালি পণ্য" />
          <p className="bg-white text-center">গৃহস্থালি পণ্য</p>
        </div>

        {/* fourth-card */}
        <div className="mx-2 space-y-2 bg-white border-0 mb-2 hover:shadow-lg">
          <img src={pic1} alt="গৃহস্থালি পণ্য" />
          <p className="bg-white text-center">গৃহস্থালি পণ্য</p>
        </div>

        {/* fifth-card */}
        <div className="mx-2 space-y-2 bg-white border-0 mb-2 hover:shadow-lg">
          <img src={pic1} alt="গৃহস্থালি পণ্য" />
          <p className="bg-white text-center">গৃহস্থালি পণ্য</p>
        </div>

        {/* sixth-card */}
        <div className="mx-2 space-y-2 bg-white border-0 mb-2 hover:shadow-lg">
          <img src={pic1} alt="গৃহস্থালি পণ্য" />
          <p className="bg-white text-center">গৃহস্থালি পণ্য</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
