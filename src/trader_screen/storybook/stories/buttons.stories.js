import React from "react";

export default {
  title: "Buttons",
  component: Buttons
};

export function Buttons() {
  return (
    <div className="flex-col">
      <div>
        <p>Enabled</p>
        <div className="flex ">
          <button class="w-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Buy
          </button>
          <button class="w-32 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sell
          </button>
        </div>
      </div>
      <div>
        <p>Disabled</p>
        <div className="flex">
          <button
            disabled
            class="w-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
          >
            Buy
          </button>
          <button
            disabled
            class="w-32 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}
