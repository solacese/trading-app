import React, { useState } from "react";
import Select from "react-select";

export default {
  title: "OrderCard",
  component: OrderCard
};

export function OrderCard() {
  const [activeCard, setActiveCard] = useState("BUY");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  return (
    <div
      style={{ width: "500px", height: "500px" }}
      className="rounded overflow-hidden shadow-md p-4"
    >
      <ul class="flex w-full">
        <li class="flex-1 mr-2">
          <button
            class={`w-full text-center block py-2 px-4 ${
              activeCard == "BUY"
                ? "border-b-4 border-green-500"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveCard("BUY")}
          >
            BUY
          </button>
        </li>
        <li class="flex-1 mr-2">
          <button
            class={`w-full text-center block py-2 px-4 ${
              activeCard == "SELL"
                ? "border-b-4 border-red-500"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveCard("SELL")}
          >
            SELL
          </button>
        </li>
      </ul>
      <div className="mt-2 w-1/2">
        <label
          for="price"
          class="block text-sm leading-5 font-medium text-gray-700"
        >
          Order Type
        </label>
        <Select
          isDisabled
          defaultValue={{ label: "Market", value: "Market" }}
        />
      </div>
      <div className="mt-2 w-1/2">
        <label
          for="price"
          class="block text-sm leading-5 font-medium text-gray-700"
        >
          Price
        </label>
        <div
          class="mt-2 px-2 rounded-md shadow-sm flex items-center"
          style={{ backgroundColor: "hsl(0,0%,95%)" }}
        >
          <span className="text-gray-500 pointer-events-none">$</span>
          <input
            disabled
            id="price"
            defaultValue={"89.04"}
            className="ml-2"
            style={{ backgroundColor: "inherit" }}
          />
          <div class="flex flex-grow justify-end text-gray-700">
            <span>CAD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
