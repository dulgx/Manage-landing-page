import Image from "next/image";
import Illustration from "../images/illustration-intro.svg";

const HeroComponent = () => {
  return (
    <div className="flex justify-between py-20 max-md:flex-col-reverse max-md:items-center">
      <div className="max-md:flex flex-col w-2/4  max-md:w-full max-md:items-center max-md:pt-5 grid content-center ">
        <h1 className=" text-7xl font-bold max-md:text-4xl max-md:text-center max-lg:text-5xl">
          Bring everyone together to build better products.
        </h1>
        <p className=" w-3/5 py-8 text-gray-500 text-base max-md:text-xl max-md:text-center max-md:w-full">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className=" bg-red-500 w-32 text-white text-sm py-2 px-4 rounded-3xl hover:bg-rose-300 mx-2 h-10">
          Get Started
        </button>
      </div>
      <div>
        <Image src={Illustration} alt="illustration" className=" " />
      </div>
    </div>
  );
};

export default HeroComponent;
