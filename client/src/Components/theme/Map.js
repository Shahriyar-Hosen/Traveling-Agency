import React from "react";

const MapCompo = () => {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-semibold font-serif pb-3">Map</h1>
      <div className="map rounded overflow-hidden">
        <div className="w-full">
          <iframe
            className=" rounded overflow-hidden w-full"
            height="400"
            title="google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.05517529047!2d90.27575512876744!3d23.780727221499042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa723bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1662898823726!5m2!1sen!2sus"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-start items-center gap-5"></div>
    </div>
  );
};

export default MapCompo;
