import { IoCallOutline } from "react-icons/io5";

const ButtomHeader = () => {
    return (
        <div className="hidden md:block">
            <div className="flex flex-col  md:flex-row md:justify-center gap-[600px] text-white mx-auto  bg-blue-700">
                <div className="flex flex-col md:flex-row md:justify-center md:items-center">
                    <div className="">
                        <details className="dropdown">
                            <summary className="btn m-1 md:w-60 text-white flex rounded-none justify-between bg-orange-600"><h1>Categories</h1>   <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg></summary>
                            <ul className="menu text-black dropdown-content border border-blue-300 bg-base-100 rounded-box z-[1] w-64 p-2 shadow">
                                <li><a>গৃহস্থালি পণ্য</a></li>
                                <li><a>স্বাস্থ্য সুরক্ষা পণ্য</a></li>
                                <li><a>ইলেক্ট্রনিক্স পণ্য</a></li>
                                <li><a>ছেলেদের শপিং</a></li>
                                <li><a>মেয়েদের শপিং</a></li>
                                <li><a>মোবাইল ও গ্যাজেট</a></li>
                                <li><a>ফুড আইটেম</a></li>
                                <li><a>দই মেকার</a></li>
                                <li><a>Air pod</a></li>
                                <li><a>All</a></li>
                                
                            </ul>
                        </details>
                    </div>
                    <div className="">
                        <ul className="flex gap-4">
                            <li><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li><a>Category</a></li>
                            <li><a>Contact</a></li>
                        </ul>

                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <IoCallOutline />
                    <h1>
                        +880 1782-318398
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ButtomHeader;