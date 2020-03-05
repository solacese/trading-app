import React from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from "react-vis";

export default {
  title: "DesktopGUI",
  component: DesktopGUI
};

export function DesktopGUI() {
  const MSEC_DAILY = 60000;
  const timestamp = new Date().getTime();

  return (
    <div class="flex flex-col">
      <h2 class="text-2xl font-bold leading-7 text-gray-900">
        Royal Bank of Canada
      </h2>
      <div class="mt-1 flex flex-col">
        <div class="mt-2 flex items-center text-3xl leading-5">
          <div className="text-green-500">
            <GoTriangleUp />
          </div>
          <div className="text-gray-900 ml-2">89.74</div>
          <div className="text-gray-600 ml-2">CAD</div>
        </div>
      </div>
      <div className="flex mt-2">
        <XYPlot xType="time" width={1000} height={500}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
          <LineSeries
            data={[
              { x: timestamp + MSEC_DAILY, y: 86.4 },
              { x: timestamp + MSEC_DAILY * 2, y: 86.8 },
              { x: timestamp + MSEC_DAILY * 3, y: 89.86 },
              { x: timestamp + MSEC_DAILY * 4, y: 85.72 }
            ]}
          />
        </XYPlot>
        <div className="flex"></div>
      </div>
    </div>
  );
}
