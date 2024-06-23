// components/MineralStatistics.js

import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const MineralStatistics = ({ data, selectedYear, loading, error }) => {
  const minerals = [
    { name: "Argillaceous_clay (LSM)", icon: "🏺" },
    { name: "Bauxite", icon: "⛏️" },
    { name: "Bentonite", icon: "🛠️" },
    { name: "Brine (LSM)", icon: "🌊" },
    { name: "Coal", icon: "🏭" },
    { name: "Coal_LSM", icon: "🏭" },
    { name: "China_Clay", icon: "🏺" },
    { name: "Dolomite", icon: "🪨" },
    { name: "Fireclay", icon: "🏺" },
    { name: "Fuller_Earth", icon: "🪨" },
    { name: "Gypsum", icon: "🏰" },
    { name: "Gypsum_LSM", icon: "🏰" },
    { name: "Iron_Ore", icon: "⚙️" },
    { name: "Limestone", icon: "🪨" },
    { name: "Limestone_LSM", icon: "🪨" },
    { name: "Latrite", icon: "🏺" },
    { name: "Marble", icon: "🏛️" },
    { name: "Ochers", icon: "🎨" },
    { name: "RockSalt", icon: "🧂" },
    { name: "RockSalt_LSM", icon: "🧂" },
    { name: "Silica_Sand", icon: "🪨" },
    { name: "Silica_Sand_LSM", icon: "🪨" },
    { name: "Ordinary_Salt", icon: "🧂" },
    { name: "Lake_Salt", icon: "🧂" },
    { name: "Sand_Gravel_LSM", icon: "🪨" },
  ];

  const sumColumn = (mineral) => {
    return data.reduce((acc, item) => acc + (item[mineral.name] || 0), 0);
  };

  const barChartData = {
    labels: minerals.map((mineral) => `${mineral.icon} ${mineral.name}`),
    datasets: [
      {
        label: `Total Revenue for ${selectedYear}`,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: minerals.map((mineral) => sumColumn(mineral)),
      },
    ],
  };

  const pieChartData = {
    labels: minerals.map((mineral) => `${mineral.icon} ${mineral.name}`),
    datasets: [
      {
        data: minerals.map((mineral) => sumColumn(mineral)),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFD700",
          "#00CED1",
          "#FF6347",
          "#7B68EE",
          "#20B2AA",
          "#FFA07A",
          "#00FF00",
          "#FF69B4",
          "#1E90FF",
          "#BDB76B",
          "#9ACD32",
          "#00BFFF",
          "#FF4500",
          "#FF1493",
          "#FF8C00",
          "#6A5ACD",
          "#DC143C",
          "#8A2BE2",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFD700",
          "#00CED1",
          "#FF6347",
          "#7B68EE",
          "#20B2AA",
          "#FFA07A",
          "#00FF00",
          "#FF69B4",
          "#1E90FF",
          "#BDB76B",
          "#9ACD32",
          "#00BFFF",
          "#FF4500",
          "#FF1493",
          "#FF8C00",
          "#6A5ACD",
          "#DC143C",
          "#8A2BE2",
        ],
      },
    ],
  };

  return (
    <div className="mineral-statistics">
      <h2>Mineral Revenue Statistics</h2>
      {loading ? (
        <p className="loading-text">Please wait! Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="charts-container">
          <div className="chart">
            <Bar
              data={barChartData}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
          <div className="chart">
            <Pie
              data={pieChartData}
              options={{
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MineralStatistics;
