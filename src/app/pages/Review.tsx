import React from "react";
import Person1 from "../images/avatar-ali.png";
import Person2 from "../images/avatar-anisha.png";
import Person3 from "../images/avatar-richard.png";
import Person4 from "../images/avatar-shanai.png";
import Image from "next/image";

const Review = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-10 ">
        <h1 className=" text-4xl font-bold py-10 ">What they've said</h1>
        <div className="flex flex-row max-md:flex-col relative">
          <div className="flex flex-col items-center mx-3">
            <Image
              src={Person1}
              alt="person"
              className=" absolute -top-6 h-12 w-12 "
            />
            <div className=" py-10 px-10 bg-gray-100 rounded-xl flex flex-col items-center ">
              <h1 className=" font-bold">Anisha Li</h1>
              <p className=" text-center py-5">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mx-3 max-md:my-10 max-md:-top-1">
            <Image
              src={Person2}
              alt="person"
              className=" absolute -top-6 h-12 w-12 "
            />
            <div className=" py-10 px-10 bg-gray-100 rounded-xl ">
              <h1 className=" font-bold">Anisha Li</h1>
              <p className=" text-center py-5">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mx-3">
            <Image
              src={Person3}
              alt="person"
              className=" absolute -top-6 h-12 w-12 "
            />
            <div className=" py-10 px-10 bg-gray-100 rounded-xl ">
              <h1 className=" font-bold">Anisha Li</h1>
              <p className=" text-center py-5">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mx-3">
            <Image
              src={Person4}
              alt="person"
              className=" absolute -top-6 h-12 w-12 "
            />
            <div className=" py-10 px-10 bg-gray-100 rounded-xl ">
              <h1 className=" font-bold">Anisha Li</h1>
              <p className=" text-center py-5">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
        </div>
        <button className=" my-10 w-28 bg-red-500 text-white text-sm py-2 px-4 rounded-3xl hover:bg-rose-300 mx-2">
          Get Started
        </button>
      </div>
      <div className=" bg-red-500  md:-ml-28 md:-mr-28 justify-around flex max-md:flex-col max-md:items-center max-md:-mx-10">
        <p className=" px-28 content-center text-2xl text-white max-md:px-0 max-md:text-center max-md:my-10">
          Simplify how your team works today.
        </p>
        <button className="  my-10 w-28 bg-white text-red-500 font-bold text-sm py-2 px-4 rounded-3xl hover:bg-rose-300 mx-2 max-md:my-5 max-md:items-center">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Review;
