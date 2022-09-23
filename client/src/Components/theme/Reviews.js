import React from "react";

const Reviews = () => {
  return (
    <div>
      {/* Average Reviews */}
      <div className="my-10">
        <h1 className="text-2xl font-semibold font-serif pb-3">
          Average Reviews
        </h1>
        <div className=" flex flex-col md:flex-row gap-10">
          <div className="md:w- bg-[#17233e] text-white p-8 rounded-lg  text-center flex flex-col gap-4">
            <span className="text-5xl font-serif">2.2/5</span>{" "}
            <p>
              <q className="text-xl font-serif">
                Feel So Much Worst Than Thinking
              </q>{" "}
            </p>
            <span>From 40 Reviews</span>
          </div>
          <div className="flex flex-col gap-1 justify-center w-full mr-10">
            <span className="text-lg font-semibold">
              <h1>Cleanliness</h1>
              <progress
                className="progress progress-primary w-full"
                valu="45"
                max="100"
              ></progress>
            </span>
            <span className="text-lg font-semibold">
              <h1>Facilities</h1>
              <progress
                className="progress progress-primary w-full"
                valu="40"
                max="100"
              ></progress>
            </span>
            <span className="text-lg font-semibold">
              <h1>valu for money</h1>
              <progress
                className="progress progress-primary w-full"
                valu="30"
                max="100"
              ></progress>
            </span>
            <span className="text-lg font-semibold">
              <h1>Service</h1>
              <progress
                className="progress progress-primary w-full"
                valu="45"
                max="100"
              ></progress>
            </span>
            <span className="text-lg font-semibold">
              <h1>Location</h1>
              <progress
                className="progress progress-primary w-full"
                valu="20"
                max="100"
              ></progress>
            </span>
          </div>
        </div>
      </div>
      {/* Write A Review */}
      <div className="my-10">
        <h1 className="text-2xl font-semibold font-serif pb-3">
          Write A Review
        </h1>
        <form className="w-full  flex flex-col gap-5">
          <span className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-full"
            />
          </span>
          <textarea
            className="textarea textarea-bordered w-full h-28"
            placeholder="Comment"
          ></textarea>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
