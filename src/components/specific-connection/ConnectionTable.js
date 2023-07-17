import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import faker from "faker";

const data1 = [
  { connection1: "name1", connented: ["c1", "c2", "c3", "c4", "c5", "c6"] },
  {
    connection1: "name2",
    connented: ["c21", "c22", "c23", "c24", "c25", "c26"],
  },
  {
    connection1: "name3",
    connented: ["c31", "c32", "c33", "c34", "c35", "c36"],
  },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["Name1", "Name1", "Name1", "Name1", "Name1", "Name1", "Name1"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 3, 4, 5],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "Dataset 2",
      data: [121, 222, 333, 34, 15],
      backgroundColor: "rgb(75, 192, 192)",
    },
    {
      label: "Dataset 3",
      data: [1, 2, 3, 4, 5],
      backgroundColor: "rgb(53, 162, 235)",
    },
  ],
};

const ConnectionTable = () => {
  return <Bar options={options} data={data} />;
};

export default ConnectionTable;
