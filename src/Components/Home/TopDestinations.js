import React from "react";

const TopDestinations = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-5  text-center w-3/4 mx-auto">
        <h5 className="font-serif text-secondary font-semibold text-lg mt-16">
          Top Destinations
        </h5>
        <h1 className="font-serif text-3xl md:text-4xl text-primary ">
          <span className="text-neutral">Explore</span> Top Destinations
        </h1>
        <p className="max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-5">
        <div className="row-span-4 grid grid-rows-3 gap-5">
          <div className="row-span-3 relative">
            <img
              className="w-full h-full rounded-xl"
              src="	https://htmldesigntemplates.com/html/travelin/images/destination/destination2.jpg"
              alt=""
            />
            <div className="absolute bottom-0 pb-5 rounded-xl top-0 z-10 flex justify-between w-full px-10 py-5 items-end bg-gray-900 bg-opacity-20 font-serif">
              <div>
                <h1 className="text-xl font-semibold text-secondary">Italy</h1>
                <p className="text-white text-2xl font-semibold">
                  Caspian Valley
                </p>
              </div>
              <button className="btn btn-sm text-md text-white btn-primary font-sans">
                18 Tours
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="relative">
              <img
                className="w-full h-full rounded-xl "
                src="https://htmldesigntemplates.com/html/travelin/images/destination/destination15.jpg"
                alt=""
              />
              <div className="absolute bottom-0 pb-5 rounded-xl top-0 z-10 flex justify-between w-full px-10 py-5 items-end bg-gray-900 bg-opacity-20 font-serif">
                <div>
                  <h1 className="text-xl font-semibold text-secondary">
                    Moscow
                  </h1>
                  <p className="text-white text-2xl font-semibold">Russia</p>
                </div>
                <button className="btn btn-sm text-md text-white btn-primary font-sans">
                  15 Tours
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-full rounded-xl"
                src="	https://htmldesigntemplates.com/html/travelin/images/destination/destination16.jpg"
                alt=""
              />
              <div className="absolute bottom-0 pb-5 rounded-xl top-0 z-10 flex justify-between w-full px-10 py-5 items-end bg-gray-900 bg-opacity-20 font-serif">
                <div>
                  <h1 className="text-xl font-semibold text-secondary">
                    Florida
                  </h1>
                  <p className="text-white text-2xl font-semibold">America</p>
                </div>
                <button className="btn btn-sm text-md text-white btn-primary font-sans">
                  32 Tours
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-4 max-h-[700px] relative">
          <img
            className="w-full h-full rounded-xl transform transition duration-500 hover:scale-125"
            src="https://htmldesigntemplates.com/html/travelin/images/destination/destination1.jpg"
            alt=""
          />
          <div className="absolute bottom-0 pb-5 rounded-xl top-0 z-10 flex justify-between w-full px-10 py-5 items-end bg-gray-900 bg-opacity-20 font-serif">
            <div>
              <h1 className="text-xl font-semibold text-secondary">England</h1>
              <p className="text-white text-2xl font-semibold">London</p>
            </div>
            <button className="btn btn-sm text-md text-white btn-primary font-sans">
              15 Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
