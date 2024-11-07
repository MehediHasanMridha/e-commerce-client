import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HotDealCard from "./HotDealCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
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
  };

  return (
    <div className="slider-container">
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
