import React, { useState } from "react";

import menuList from "../otherItems/menuArray.js";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "./MenuPage.css";

const Menu = () => {
  // Sample array of similar objects

  const [initial, setInitial] = useState([0, 0, 0, 0, 0, 0]);

  const handleClickIncrease = (id) => {
    setInitial((prevData) => {
      prevData[id] = prevData[id] + 1;

      const newData = [...prevData];
      console.log(newData);
      return newData;
    });
  };

  const handleClickDecrease = (id) => {
    if (initial[id] >= 1) {
      setInitial((prevData) => {
        prevData[id] = prevData[id] - 1;

        const newData = [...prevData];

        return newData;
      });
    }
  };

  return (
    <div className=" p-6 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Items List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menuList.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-700">{item.name}</h2>

            <img src={`images/${item.name}.jpg`} alt={item.name} />

            <p className="text-gray-600 mt-2">{item.description}</p>

            <h3>Add Quantity </h3>
            <div className="grid grid-cols-3 gap-4 operations">
              <div>
                <FaArrowUp onClick={() => handleClickIncrease(item.id - 1)} />
              </div>
              {console.log(`id number ${initial[item.id - 1]}`)}
              <div>{initial[item.id - 1]} </div>

              <div>
                <FaArrowDown onClick={() => handleClickDecrease(item.id - 1)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
