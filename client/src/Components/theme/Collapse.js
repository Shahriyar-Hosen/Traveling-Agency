import React from "react";

const Collapse = () => {
  return (
    <div className="my-10 ">
      <div tabIndex={0} className="collapse collapse-arrow bg-base-100">
        <input type="checkbox" />
        {/* defaultChecked bg-primary text-white */}
        <div className="collapse-title text-xl font-medium border rounded-lg">
          Day 1 - Barcelona - Zaragoza - Madrid
        </div>
        <div className="collapse-content pt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            inventore cumque veniam, praesentium velit incidunt rem quas a, quos
            eos ipsum, reprehenderit voluptatem.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow bg-base-100 ">
        <input type="checkbox" />
        {/* defaultChecked bg-primary text-white */}
        <div className="collapse-title text-xl font-medium border rounded-lg">
          Day 2 - Zurich - Biel/Bienne - Neuchatel - Geneva
        </div>
        <div className="collapse-content pt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            inventore cumque veniam, praesentium velit incidunt rem quas a, quos
            eos ipsum, reprehenderit voluptatem.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow bg-base-100 ">
        <input type="checkbox" />
        {/* defaultChecked bg-primary text-white */}
        <div className="collapse-title text-xl font-medium border rounded-lg">
          Day 3 - Enchanting Engelberg
        </div>
        <div className="collapse-content pt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            inventore cumque veniam, praesentium velit incidunt rem quas a, quos
            eos ipsum, reprehenderit voluptatem.
          </p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow bg-base-100 ">
        <input type="checkbox" />
        {/* defaultChecked bg-primary text-white */}
        <div className="collapse-title text-xl font-medium border rounded-lg">
          Day 4 - Barcelona - Zaragoza - Madrid
        </div>
        <div className="collapse-content pt-5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            inventore cumque veniam, praesentium velit incidunt rem quas a, quos
            eos ipsum, reprehenderit voluptatem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
