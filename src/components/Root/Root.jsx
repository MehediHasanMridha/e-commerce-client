import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ButtomHeader from "../ButtomHeader/ButtomHeader";
import Slider from "../ButtomHeader/Slider/Slider";

const Root = () => {
    return (
        <div className="bg-[#fffbfb] min-h-screen">
            <NavBar></NavBar>
            <ButtomHeader></ButtomHeader>
            <Slider></Slider>
            <Outlet></Outlet>
            <h1 className="text-center font-bold py-20 text-white">Hello i am from root component and the project was initialized successfully.</h1>
        </div>
    );
};

export default Root;