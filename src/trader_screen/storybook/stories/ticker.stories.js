import React from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

export default {
  title: "Ticker",
  component: Ticker
};

export function Ticker() {
  return (
    <div className="flex-col">
      <div>
        <p>Positive</p>
        <div class="mt-2 flex items-center text-3xl leading-5">
          <div className="text-green-500">
            <GoTriangleUp />
          </div>
          <div className="text-gray-900 ml-2">89.74</div>
          <div className="text-gray-600 ml-2">CAD</div>
        </div>
      </div>
      <div className="mt-4">
        <p>Negative</p>
        <div class="mt-2 flex items-center text-3xl leading-5">
          <div className="text-red-500">
            <GoTriangleDown />
          </div>
          <div className="text-gray-900 ml-2">89.74</div>
          <div className="text-gray-600 ml-2">CAD</div>
        </div>
      </div>
    </div>
  );
}
