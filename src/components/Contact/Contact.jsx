import { FiPhone } from "react-icons/fi";
import { GrMailOption } from "react-icons/gr";
import SendingMail from "../SendingMail/SendingMail";
const Contact = () => {
  return (
    <div className="pt-10 flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:w-96">
        {/* 1st para  */}
        <div className="mb-5">
          <h2 className="text-[#007CEA] font-bold pb-3">Contact Information</h2>
          <p className="text-black text-sm">
            Click Buy BD a online shopping brand in bangladesh
          </p>
        </div>

        {/* icon  */}
        <div className="flex flex-col gap-5">
          {/* phone  */}
          <div className="flex justify-start gap-3 items-center">
            <FiPhone className="text-[#FE4E00]" />
            <h1 className="text-gray-400 hover:text-[#FE4E00]">01234567890</h1>
          </div>
          {/* email  */}
          <div className="flex justify-start gap-3 items-center">
            <GrMailOption className="text-[#FE4E00]" />
            <h1 className="text-gray-400 hover:text-[#FE4E00]">
              abc@gmail.com
            </h1>
          </div>
        </div>
      </div>

      {/* sending mail parts are here  */}
      <SendingMail className="" />
    </div>
  );
};

export default Contact;
