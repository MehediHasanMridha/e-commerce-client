import { useState } from "react";
import { IoIosCall } from "react-icons/io";


const Root = () => {
  const [value, setValue] = useState(1);
  const handlePlusValue = () => {
    if (value < 10) {
      setValue(value + 1)
    }
  }
  const handleMinusValue = () => {
    if (value > 1) {
      setValue(value - 1)
    }
  }
  return (
    <div className="bg-[#f8f8f8] my-10 flex flex-col md:flex-row gap-4 px-2 md:w-[80%] w-[100%] md:mx-auto">
      {/* left side */}
      <div className="flex flex-col-reverse md:h-[297px] md:w-1/3 lg:flex-row gap-3">
        <div className=" flex flex-row lg:flex-col gap-[10px]">
          {/* left image */}
          <div>
            <img className="md:w-[68px] lg:h-[67px]" src="https://new2.codexdigitalagency.com/uploads/products/gallery/pNxpY0BE-7094.jpg" alt="" />
          </div>
          <div>
            <img className="md:w-[68px] lg:h-[67px]" src="https://new2.codexdigitalagency.com/uploads/products/gallery/pNxpY0BE-7094.jpg" alt="" />
          </div>
          <div>
            <img className="md:w-[68px] lg:h-[67px]" src="https://new2.codexdigitalagency.com/uploads/products/gallery/pNxpY0BE-7094.jpg" alt="" />
          </div>
          <div>
            <img className="md:w-[68px] lg:h-[67px]" src="https://new2.codexdigitalagency.com/uploads/products/gallery/pNxpY0BE-7094.jpg" alt="" />
          </div>
        </div>
        {/* right image */}
        <div>
          <img className="md:w-[300px] w-full lg:h-[298px]" src="https://new2.codexdigitalagency.com/uploads/products/gallery/pNxpY0BE-7094.jpg" alt="" />
        </div>
      </div>
      {/* right side */}
      <div className="md:w-2/3">
        <h2 className="text-2xl font-semibold text-[#007cea]">AirPods Pro 2nd Generation ANC Dubai Master Copy Black Edition</h2>
        <h3 className="text-xl font-semibold my-3 text-[#fe4e00]">Price:৳ 1380 <span style={{ textDecoration: 'line-through' }} className="text-[#007cea] text-[14px]">৳1850</span></h3>
        <p className="bg-[#41b468] my-3 text-white text-[14px] md:w-1/4">প্রোডাক্ট কোড: 84sdB01r-56069</p>
        {/* পরিমান div */}
        <div className="flex mt-2">
          <h2 className="flex justify-center items-center mr-1"> পরিমান : </h2>
          <div className="border-2 w-[150px] h-8 flex flex-row justify-between border-black">
            <button onClick={handleMinusValue} className="border-r-2 px-2 border-black">-</button>
            <h1>{value}</h1>
            <button onClick={handlePlusValue} className="border-l-2 px-2 border-black">+</button>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row gap-5">
          <button className="md:w-[198px] h-[38px] text-[14px] text-white bg-[#fe4e00]">অর্ডার করুন</button>
          <button className="md:w-[198px] h-[38px] text-[14px] text-white bg-[#fe4e00]">কার্ট-এ যোগ করুন</button>
        </div>
        <div>
          <p className="text-[14px] text-[#998674]">ঢাকার ভিতরে ডেলিভারি ৳ 80 <br />
            ঢাকার বাইরে ডেলিভারি ৳ 150 <br />
            ঢাকার বাহিরে কুরিয়ার খরচ অগ্রিম প্রদান করতে হবে ৳ 150</p>
        </div>
        {/* ফোনে অর্ডারের জন্য ডায়াল করুন */}
        <div className=" lg:w-[90%] md:h-[124px]  border-4 my-4 border-[#dddddd] border-dashed text-xl p-3 text-[#007cea]">
          <h2 className="mb-3">ফোনে অর্ডারের জন্য ডায়াল করুন</h2>
          <div className="flex flex-col md:flex-row items-center">
            <button className="text-[#fe4e00] font-semibold md:mr-2 hover:text-[#007cea] flex items-center"> <p><IoIosCall/></p> <p>+880 1782-318399</p> </button>
            <button><span className="text-[16px] text-[#fe4e00] border-2 border-[#fe4e00] p-1 border-dashed hover:text-[#007cea]">Customer Care</span></button>
          </div>
        </div>

        {/* ক্যাটেগরীজ: */}
        <div>
          <h1 className=" text-[#998674]">ক্যাটেগরীজ: <button className="text-[#757176] hover:text-[#fe4e00] hover:border-b-2 border-[#fe4e00]">Airpod</button> </h1>
        </div>
      </div>
    </div>
  )
};

export default Root;
