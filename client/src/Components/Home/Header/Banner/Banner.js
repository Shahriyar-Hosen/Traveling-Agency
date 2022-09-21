import React, { useState } from "react";
import bannerLogo from "../../../../Assets/log/logo.png";
import Content from "../../../theme/Content";
import { WiUmbrella } from "react-icons/wi";
import {
  IoAirplaneOutline,
  IoHomeOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import PButton from "../../../theme/PButton";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { AiOutlineCalendar } from "react-icons/ai";
import { format } from "date-fns";

const Banner = () => {
  const [openDate, setOpenDate] = useState(false);
  const [option, setOption] = useState([]);
  const navigate = useNavigate();
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleChange = (e) => {
    setOption((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  
  // navigate("/findRoom", { state: { dates, option } });
  
  return (
    <section className="banner min-h-[110vh] h-full">
      <div className="bg-black w-full h-full bg-opacity-40 py-10">
        <Content>
          <div className="bg-white w-60 mx-auto p-5 rounded-xl mb-10 mt-5">
            <img src={bannerLogo} alt="" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10">
            <div>
              {/* header */}
              <div className="text-center lg:text-start pl-10">
                <h5 className="text-white text-lg lg:text-xl font-serif font-semibold">
                  ARE YOU READY TO TRAVEL
                </h5>
                <h1 className="text-white text-4xl lg:text-5xl font-serif font-semibold py-5">
                  ULTIMATE TRAVEL{" "}
                </h1>
                <h3 className="text-secondary text-4xl lg:text-5xl font-serif font-semibold">
                  TOUR BOOKING
                </h3>
              </div>

              {/* section */}
              <div className="flex gap-5 justify-center items-center flex-wrap mt-10">
                <div className="w-32 h-28 rounded-xl border-2 flex flex-col justify-center items-center text-white hover:border-none hover:bg-primary hover:duration-300 hover:ease-in ease-in duration-300">
                  <WiUmbrella className="text-6xl" />
                  TOUR
                </div>
                <div className="w-32 h-28 rounded-xl border-2 flex justify-center gap-3 items-center text-white flex-col hover:border-none hover:bg-primary hover:duration-300 hover:ease-in ease-in duration-300">
                  <IoAirplaneOutline className="-rotate-45 text-5xl" />
                  FLIGHT
                </div>
                <div className="w-32 h-28 rounded-xl border-2 flex justify-center items-center text-white flex-col gap-3 hover:border-none hover:bg-primary hover:duration-300 hover:ease-in ease-in duration-300">
                  <IoHomeOutline className="text-5xl" />
                  HOTEL
                </div>
                <div className="w-32 h-28 rounded-xl border-2 flex justify-center items-center text-white flex-col gap-2 hover:border-none hover:bg-primary hover:duration-300 hover:ease-in ease-in duration-300">
                  <IoLocationOutline className="text-5xl" />
                  DESTINATION
                </div>
              </div>

              {/* form */}
              <div className="w-full px-3 mt-7 flex flex-col justify-center items-center mb-10 gap-2">
                <div className="w-full pb-5">
                  <label className="label">
                    <span className="label-text text-white">
                      What is your name?
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full "
                  />
                </div>
                {/* date */}
                <div className="w-full flex  gap-8 relative">
                  <button
                    onClick={() => setOpenDate(!openDate)}
                    className="w-full py-3 px-5 rounded-lg text-lg bg-white tracking-widest flex justify-between items-center"
                  >
                    {`${format(dates[0].startDate, "MM-dd-yyyy")}`}
                    <AiOutlineCalendar className="text- text-xl text-primary" />
                  </button>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="absolute top-12 left-0 z-40"
                    />
                  )}
                  <button
                    onClick={() => setOpenDate(!openDate)}
                    className="py-3 px-5 rounded-lg w-full text-lg bg-white tracking-widest flex justify-between items-center"
                  >
                    {`${format(dates[0].endDate, "MM-dd-yyyy")}`}
                    <AiOutlineCalendar className="text-primary text-xl" />{" "}
                  </button>
                  {/* <div className="w-full">
                    <label className="label">
                      <span className="label-text text-white">What is</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </div>
                  <div className="w-full">
                    <label className="label">
                      <span className="label-text text-white">
                        What is your
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full "
                    />
                  </div> */}
                </div>
                <div className="w-full flex  gap-8">
                  <div className="w-full">
                    <label className="label">
                      <span className="label-text text-white">Adult</span>
                    </label>
                    <select className="select select-bordered w-full">
                      <option selected>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="label">
                      <span className="label-text text-white">Children</span>
                    </label>
                    <select className="select select-bordered w-full">
                      <option selected>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                </div>
                <div className="w-full max-w-md">
                  <label className="label">
                    <span className="label-text text-white">Rooms</span>
                  </label>
                  <select className="select select-bordered w-full">
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <PButton
                  className={
                    "flex justify-center items-center gap-1 mt-5 mb-10"
                  }
                >
                  {" "}
                  <BiSearchAlt2 className="text-xl" /> Search Now
                </PButton>
              </div>
            </div>
            <div>
              <div>
                Many Choices Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident.
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </Content>
      </div>
    </section>
  );
};

export default Banner;
