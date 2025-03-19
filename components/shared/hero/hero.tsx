import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="sm:text-6xl text-4xl font-extrabold text-white uppercase">
        Work With Professionals
      </h1>
      <p className="text-white text-2xl mt-4 max-w-[600px]">
        Achieve your fitness goals with expert guidance and professional
        training.
      </p>
      <div className="mt-6">
        <button className="bg-[#d8ed4b] text-black px-6 py-2 rounded-full mr-4">
          Start Now
        </button>
        <button className="border border-white text-white px-6 py-2 rounded-full">
          Learn More
        </button>
      </div>

      <div className="flex gap-4 mt-8">
        <FaAngleLeft size={40} className="text-white cursor-pointer" />
        <FaAngleRight size={40} className="text-white cursor-pointer" />
      </div>
    </div>
  );
}
