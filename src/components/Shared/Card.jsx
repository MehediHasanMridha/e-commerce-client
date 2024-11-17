import React from 'react';

const ProductCard = () => {
    return (
        <div className="max-w-xs rounded-xs bg-white border rounded-xs hover:shadow-md">
            <img
                src="https://new2.codexdigitalagency.com/uploads/products/preview/ME3QU8Ce-4079.jpg"
                alt="Product"
                className="w-full rounded-t-md"
            />

            <div className='relative'>
                <button className="w-full py-2 mt-4 text-white bg-[#FF6426] rounded-xs hover:bg-gray-400 transition duration-300">
                    অর্ডার করুন
                </button>
                <button className="md:hidden w-full absolute top-12 left-0 py-3 text-white bg-[#D7D7D7] rounded-xs hover:bg-gray-400 transition duration-300">
                </button>
            </div>

            <div className="mt-2 text-center pb-5 py-3 px-4">
                <p className="text-sm text-red-500">৳ 480</p>
                <p className="text-sm text-gray-400 line-through">৳ 550</p>
                <p className="mt-1 text-blue-500">Comfortable Cotton</p>
            </div>
        </div>
    );
};

export default ProductCard;
