import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HotDealCard from "./HotDealCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="hidden lg:block"
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="hidden lg:block"
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const HotDealSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container my-6">
      <Slider {...settings}>
        <div>
          <HotDealCard />
        </div>
        <div>
          <HotDealCard />
        </div>
        <div>
          <HotDealCard />
        </div>
        <div>
          <HotDealCard />
        </div>
        <div>
          <HotDealCard />
        </div>
        <div>
          <HotDealCard />
        </div>
        <div>
          <HotDealCard />
        </div>
      </Slider>
    </div>
  );
};

export default HotDealSlider;
