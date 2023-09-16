import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Interaction", "Taken"],
  ["Interaction", 14],
  ["Attention", 10],
  ["Disturbance", 4], // CSS-style declaration
];

export const options = {
  pieHole: 0.7,
  fontSize: 12,
  is3D: false,
  hAxis: {
    textStyle: { color: "#749BC2" },
  },
  colors: ["#4682A9", "#749BC2", "#91C8E4"],
  chartArea: { width: "100%", height: "100%" },
};

export function ChartPie2() {
  return <Chart chartType="PieChart" data={data} options={options} />;
}
