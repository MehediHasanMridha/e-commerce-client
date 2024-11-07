import { HiArrowLongRight } from "react-icons/hi2";

const SendingMail = () => {
  return (
    <div className="lg:w-2/3">
      {/* heading part of form  */}
      <>
        <h2 className="text-[#007CEA] font-bold pt-3">Got Any Questions?</h2>
        <p className="text-black text-sm py-4">
          Use the form below to get in touch with the sales team
        </p>
      </>

      <form className="flex gap-5 flex-col">
        {/* name and email here  */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* name  */}
          <input
            className="py-2 px-4 text-black bg-white placeholder:text-black border focus:border-[#FE4E00]  w-full outline-none"
            type="text"
            name="name"
            placeholder="Name *"
          />
          {/* email  */}
          <input
            className="py-2 px-4 text-black bg-white placeholder:text-black border focus:border-[#FE4E00]  w-full outline-none"
            type="email"
            name="email"
            placeholder="Email *"
          />
        </div>
        <input
          className="py-2 px-4 text-black bg-white placeholder:text-black border focus:border-[#FE4E00]  w-full outline-none"
          type="text"
          name="phone"
          placeholder="Phone"
        />
        <textarea
          className="py-2 px-4 text-black bg-white placeholder:text-black border focus:border-[#FE4E00] w-full outline-none min-h-40"
          name="message"
          id=""
          placeholder="Message *"
        />
        <button
          className="btn bg-white hover:bg-[#FE4E00] hover:text-white  text-[#FE4E00] hover:border-[#FE4E00] border-[#FE4E00] rounded-3xl items-center w-36 text-xl"
          type="submit"
        >
          SUBMIT <HiArrowLongRight />
        </button>
      </form>
    </div>
  );
};

export default SendingMail;
