import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Schedule", "Taken"],
  ["Taken", 18],
  ["Missed", 2], // CSS-style declaration
];

export const options = {
  pieHole: 0.7,
  is3D: false,
  hAxis: {
    textStyle: { color: "#749BC2" },
  },
  colors: ["#4682A9", "#749BC2", "#F6F4EB"],
  chartArea: { width: "100%", height: "100%" },
};

export function ChartPie1() {
  return <Chart chartType="PieChart" data={data} options={options} />;
}
