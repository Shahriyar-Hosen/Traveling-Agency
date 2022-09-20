import React from 'react';

const Description = () => {
    return (
        <div className="my-10">
          <h1 className="text-2xl font-semibold font-serif">Description</h1>
          <p className="mt-5">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it
            is sometimes known, is dummy text used in laying out print, graphic
            or web designs.{" "}
          </p>
          <p className="mt-2">
            The passage is attributed to an unknown typesetter in the 15th
            century who is thought to have scrambled parts of Cicero's De
            Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          {/* offers table */}
          <div className="grid grid-cols-3 my-5">
            <p className="border border-b-0 px-3 py-2 font-semibold text-gray-600">
              {" "}
              5 Days
            </p>
            <p className="border border-b-0 px-3 py-2 font-semibold text-gray-600">
              {" "}
              Max People : 26
            </p>
            <p className="border border-b-0 px-3 py-2 font-semibold text-gray-600">
              {" "}
              Jan 18 - Dec 21
            </p>
            <p className="border px-3 py-2 font-semibold text-gray-600">
              {" "}
              Min Age : 10+
            </p>
            <p className="border px-3 py-2 font-semibold text-gray-600">
              {" "}
              Pickup : Airport
            </p>
            <p className="border px-3 py-2 font-semibold text-gray-600">
              {" "}
              Language - English, Thai
            </p>
          </div>
          {/* packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <div className="bg-gray-100 w-full rounded-lg p-5">
              <h1 className="text-xl font-serif font-semibold text-black">
                Departure & Return Location
              </h1>
              <ul>
                <li>John F.K. International Airport(Google Map)</li>
              </ul>
            </div>
            <div className="bg-gray-100 w-full rounded-xl font-serif p-5">
              <h1 className="text-lg font-semibold text-black">Bedroom</h1>
              <ul>
                <li>4 Bedrooms</li>
              </ul>
            </div>
            <div className="bg-gray-100 w-full rounded-lg p-5">
              <h1 className="text-xl font-serif font-semibold text-black">
                Departure Time
              </h1>
              <ul>
                <li>3 Hours Before Flight Time</li>
              </ul>
            </div>
            <div className="bg-gray-100 w-full rounded-xl font-serif p-5">
              <h1 className="text-lg font-semibold text-black">
                Departure Time
              </h1>
              <ul>
                <li>3 Hours Before Flight Time</li>
              </ul>
            </div>
            <div className="bg-gray-100 w-full rounded-lg p-5">
              <h1 className="text-xl font-serif font-semibold text-black">
                Price Includes
              </h1>
              <ul>
                <li> Air Fares</li>
                <li> 3 Nights Hotel Accomodation</li>
                <li> Tour Guide</li>
                <li>Entrance Fees</li>
              </ul>
            </div>
            <div className="bg-gray-100 w-full rounded-xl font-serif p-5">
              <h1 className="text-lg font-semibold text-black">
                Departure & Return Location
              </h1>
              <ul>
                <li>Guide Service Fee</li>
                <li>Driver Service Fee</li>
                <li>Any Private Expenses</li>
                <li>Room Service Fees</li>
              </ul>
            </div>
          </div>
        </div>
    );
};

export default Description;