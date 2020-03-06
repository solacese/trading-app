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
      style={{ width: "500px" }}
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
      <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-2">
        <div>
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700">
              Order Type
            </label>
            <div className="h-10">
              <Select
                isDisabled
                defaultValue={{ label: "Market", value: "Market" }}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    height: "2.5rem", // match h-10
                    "min-height": "2.5rem"
                  })
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <label
            for="order-size"
            class="block text-sm font-medium text-gray-700"
          >
            Order Size
          </label>
          <div class="h-10 px-2 rounded-md border flex items-center">
            <input id="order-size" defaultValue={"89.04"} className="ml-2" />
            <div class="flex flex-grow justify-end text-gray-700">
              <span>RY</span>
            </div>
          </div>
        </div>
        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">
            Price
          </label>
          <div
            class="h-10 px-2 rounded-md border flex items-center"
            style={{ backgroundColor: "hsl(0,0%,95%)" }}
          >
            <span className="text-gray-500 pointer-events-none">$</span>
            <input
              disabled
              id="price"
              defaultValue={"89.04"}
              className="ml-2 min-w-0"
              style={{ backgroundColor: "inherit" }}
            />
            <div class="flex justify-end text-gray-700">
              <span>CAD</span>
            </div>
          </div>
        </div>
        <div className="flex h-full items-end">
          <button class="w-full h-10 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Place Buy Order
          </button>
        </div>
      </div>
    </div>
  );
}
