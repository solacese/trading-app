import "../node_modules/react-vis/dist/style.css";
import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries
} from "react-vis";

export default {
  title: "Chart",
  component: Chart
};

export function Chart() {
  const MSEC_DAILY = 60000;
  const timestamp = new Date().getTime();
  return (
    <div className="w-full h-full">
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
    </div>
  );
}
