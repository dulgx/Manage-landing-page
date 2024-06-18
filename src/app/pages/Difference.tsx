const Difference = () => {
  return (
    <div className="flex flex-row py-14 max-md:flex-col max-md:justify-center max-md:items-center">
      <div className="flex flex-col w-1/2 max-md:w-full max-md:text-center">
        <h1 className=" text-5xl font-bold w-3/4 max-md:w-full max-md:text-4xl">
          {" "}
          What’s different about Manage?
        </h1>
        <p className=" w-2/4 text-gray-500 py-10 max-md:w-full">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex flex-col w-1/2 max-md:w-full ">
        <div className="flex">
          <span className=" bg-red-500 h-8 px-5 rounded-2xl pt-1 text-white">
            01
          </span>
          <div className="flex-col mx-8">
            <h1 className=" font-bold  max-md:h-8 ">
              Track company-wide progress
            </h1>
            <p className=" pt-5">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way done to the
              smallest of details. Never lose sight of the bigger picture again.{" "}
            </p>
          </div>
        </div>

        <div className="flex mt-10">
          <span className=" bg-red-500 h-8 px-5 rounded-2xl pt-1 text-white">
            02
          </span>
          <div className="flex-col mx-8">
            <h1 className=" font-bold">Advanced built-in reports</h1>
            <p className=" pt-5">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>

        <div className="flex mt-10">
          <span className=" bg-red-500 h-8 px-5 rounded-2xl pt-1 text-white">
            03
          </span>
          <div className="flex-col mx-8">
            <h1 className=" font-bold">Everything you need in one place</h1>
            <p className=" pt-5">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Difference;
