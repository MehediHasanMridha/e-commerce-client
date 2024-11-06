import pic1 from "../../assets/product-category/গৃহস্থালী-পণ্য-4429.jpg";

const ProductCategoryCard = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
        {/* first-card */}
        <div className="flex flex-col gap-1 border-0 rounded-sm mb-2 bg-white shadow-md">
          <div>
            <img src={pic1} alt="গৃহস্থালি পণ্য" />
            <div className="flex justify-center my-1">
              <h3>গৃহস্থালি পণ্য </h3>
            </div>
          </div>
        </div>

        {/* second-card */}
        <div className="flex flex-col gap-1 border-0 rounded-sm mb-2 bg-white shadow-md">
          <div>
            <img src={pic1} alt="গৃহস্থালি পণ্য" />
            <div className="flex justify-center my-1">
              <h3>গৃহস্থালি পণ্য </h3>
            </div>
          </div>
        </div>

        {/* third-Card */}
        <div className="flex flex-col gap-1 border-0 rounded-sm mb-2 bg-white shadow-md">
          <div>
            <img src={pic1} alt="গৃহস্থালি পণ্য" />
            <div className="flex justify-center my-1">
              <h3>গৃহস্থালি পণ্য </h3>
            </div>
          </div>
        </div>

        {/* fourth-card */}
        <div className="flex flex-col gap-1 border-0 rounded-sm mb-2 bg-white shadow-md">
          <div>
            <img src={pic1} alt="গৃহস্থালি পণ্য" />
            <div className="flex justify-center my-1">
              <h3>গৃহস্থালি পণ্য </h3>
            </div>
          </div>
        </div>

        {/* fifth-card */}
        <div className="flex flex-col gap-1 border-0 rounded-sm mb-2 bg-white shadow-md">
          <div>
            <img src={pic1} alt="গৃহস্থালি পণ্য" />
            <div className="flex justify-center my-1">
              <h3>গৃহস্থালি পণ্য </h3>
            </div>
          </div>
        </div>

        {/* sixth-card */}
        <div className="flex flex-col gap-1 border-0 rounded-sm mb-2 bg-white shadow-md">
          <div>
            <img src={pic1} alt="গৃহস্থালি পণ্য" />
            <div className="flex justify-center my-1">
              <h3>গৃহস্থালি পণ্য </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
