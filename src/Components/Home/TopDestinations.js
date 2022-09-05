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
          <div className="position-relative rounded row-span-3">
            <img
              className="w-full h-full rounded-xl"
              src="	https://htmldesigntemplates.com/html/travelin/images/destination/destination2.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <img
                className="w-full h-full rounded-xl"
                src="https://htmldesigntemplates.com/html/travelin/images/destination/destination15.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full rounded-xl"
                src="	https://htmldesigntemplates.com/html/travelin/images/destination/destination16.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row-span-4 max-h-[700px]">
          <img
            className="w-full h-full rounded-xl"
            src="https://htmldesigntemplates.com/html/travelin/images/destination/destination1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
