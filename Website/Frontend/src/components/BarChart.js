import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Division", "Interaction", { role: "style" }],
  ["A", 20, "color: #749BC2"],
  ["B", 40, "color: #4682A9"],
  ["C", 60, "color: #91C8E4"],
  ["D", 30, "color: #749BC2"],
];
export const options = {
  fontSize: 12,
  is3D: false,
//   chartArea: { width: "50%", height: "50%" },
};
export function BarChart() {
  return <Chart chartType="ColumnChart" data={data} options={options} />;
}
