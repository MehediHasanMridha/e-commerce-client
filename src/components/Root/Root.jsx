import Footer from "../Foooter/Footer";
import { HotDeals } from "../HotDeals.jsx/HotDeals";

const Root = () => {
    return (
        <div className="min-h-screen py-5 bg-gray-100">
            <HotDeals />
            <Footer />
        </div>
    );
};

export default Root;