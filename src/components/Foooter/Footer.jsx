import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white w-full py-12">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-8 text-gray-800 space-y-8 md:space-y-0">

                    <div className="w-full lg:col-span-3 md:py-10 lg:py-0">
                        <img src="https://new2.codexdigitalagency.com/uploads/setting/y5t5R725668.png" alt="logo" />
                        <p className="lg:mt-10">Click Buy BD, an online shopping brand in Bangladesh</p>
                    </div>

                    <div className="lg:col-span-5 grid md:grid-cols-3">
                        <div className="w-full">
                            <h3 className="text-lg font-semibold text-blue-600">নীতি</h3>
                            <ul className="mt-4 space-y-2 text-gray-900">
                                <li><a className="text-sm hover:text-blue-600">আমাদের সম্পর্কে</a></li>
                                <li><a className="text-sm hover:text-blue-600">ডেলিভারি পলিসি</a></li>
                                <li><a className="text-sm hover:text-blue-600">রিটার্ন পলিসি</a></li>
                            </ul>
                        </div>

                        <div className="w-full">
                            <h3 className="text-lg font-semibold text-blue-600">Category</h3>
                            <ul className="mt-4 space-y-2 text-gray-900">
                                <li><a className="text-sm hover:text-blue-600">গৃহস্থালী পণ্য</a></li>
                                <li><a className="text-sm hover:text-blue-600">স্বাস্থ্য সুরক্ষা পণ্য</a></li>
                                <li><a className="text-sm hover:text-blue-600">ইলেকট্রনিক পণ্য</a></li>
                                <li><a className="text-sm hover:text-blue-600">ছেলেদের শপিং</a></li>
                                <li><a className="text-sm hover:text-blue-600">মেয়েদের শপিং</a></li>
                                <li><a className="text-sm hover:text-blue-600">বেবি অ্যান্ড কিডস</a></li>
                            </ul>
                        </div>

                        <div className="w-full">
                            <h3 className="text-lg font-semibold text-blue-600">Contact</h3>
                            <div className="mt-4 space-y-2 text-gray-900">
                                <p className="text-sm">📍 Zatrabari, Dhaka, Bangladesh</p>
                                <p className="text-sm">📞 +880 1782-318398</p>
                                <p className="text-sm">✉️ info@clickbuybd.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t mt-10 text-center lg:text-start pt-6 text-gray-900 text-sm">
                    Click Buy BD | Design and Development By Nugortech IT
                </div>
            </div>
        </footer>
    );
};

export default Footer;
