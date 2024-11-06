import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="bg-[#fffbfb] min-h-screen">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <h1 className="text-center font-bold py-20 text-white">Hello i am from root component and the project was initialized successfully.</h1>
        </div>
    );
};

export default Root;