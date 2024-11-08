/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "./ProductCard.jsx";

const ProductSlider = ({ products }) => {
  const settings = {
    dots: products.length > 4,
    speed: 500,
    slidesToShow: products.length < 4 ? products.length : 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: products.length > 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
