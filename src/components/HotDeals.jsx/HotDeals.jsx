import React from 'react'
import ProductCard from '../shared/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';


export const HotDeals = () => {

    const products = [
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Comfortable Cotton',
            price: '480',
            oldPrice: '550',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Perfect Joint Bone',
            price: '1,950',
            oldPrice: '1,980',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Comfortable Cotton',
            price: '480',
            oldPrice: '550',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Perfect Joint Bone',
            price: '1,950',
            oldPrice: '1,980',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Comfortable Cotton',
            price: '480',
            oldPrice: '550',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Perfect Joint Bone',
            price: '1,950',
            oldPrice: '1,980',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Comfortable Cotton',
            price: '480',
            oldPrice: '550',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Perfect Joint Bone',
            price: '1,950',
            oldPrice: '1,980',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Comfortable Cotton',
            price: '480',
            oldPrice: '550',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Perfect Joint Bone',
            price: '1,950',
            oldPrice: '1,980',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Comfortable Cotton',
            price: '480',
            oldPrice: '550',
        },
        {
            image: 'https://new2.codexdigitalagency.com/uploads/products/gallery/wdHKvPyy-5383.jpg',
            name: 'Perfect Joint Bone',
            price: '1,950',
            oldPrice: '1,980',
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-5">
            <h2 className="text-xl text-[#007CEA] font-bold text-center md:text-start">প্রয়োজনীয় প্রোডাক্ট</h2>
            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
            <div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                    More Products <FontAwesomeIcon icon={faSyncAlt} className="ml-2" />
                </button>
            </div>
        </div>
    )
}
