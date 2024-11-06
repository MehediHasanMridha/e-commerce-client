import { BsSearch } from "react-icons/bs";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-around">
                <div className="">
                    <button>
                        <img src="https://new2.codexdigitalagency.com/uploads/setting/y5t5R725668.png" alt="" />
                    </button>
                </div>
                <div className="flex-none gap-2">
                    <div className=" flex">
                        <input type="text" placeholder="Search" className="input border-2  border-orange-700 input-bordered w-24 md:w-[500px]" />
                        <button className="btn md:w-auto bg-orange-500 w-10 btn-primary rounded-none relative -left-1">
                            <BsSearch />
                        </button>
                    </div>
                </div>
                <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;