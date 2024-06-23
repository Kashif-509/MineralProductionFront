import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MineralRevenueTable.css"; // Import your CSS file for styles

const MineralRevenueTable = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2000");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(selectedYear);
  }, [selectedYear, selectedMonth]);

  const fetchData = async (year) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/api/mineral-revenues/${year}`
      );
      setData(response.data.result || []);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]);
      setError("Error fetching data");
      setLoading(false);
    }
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

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

  const districts = [
    "Attock",
    "Chakwal",
    "DG Khan",
    "Jhelum",
    "Khushab",
    "Mianwali",
    "Rawalpindi",
    "Rahim Yar Khan",
    "Sargodha",
  ];

  const sumColumn = (mineral) => {
    return data.reduce((acc, item) => acc + (item[mineral] || 0), 0);
  };

  const renderCellValue = (mineral, district) => {
    const mineralData = data.find(
      (item) =>
        item.district.toUpperCase() === district.toUpperCase() &&
        item.year.toString() === selectedYear &&
        (selectedYear !== "2024" || item.month === selectedMonth)
    );

    if (!mineralData) {
      return "-";
    }

    const value = mineralData[mineral.name];
    return value !== undefined ? (value === 0 ? 0 : value) : "-";
  };

  return (
    <div className="mineral-revenue-container">
      <h1>Mineral Revenue Data</h1>
      <div className="form-group">
        <label>Select Year:</label>
        <select value={selectedYear} onChange={handleYearChange}>
          {Array.from({ length: 51 }, (v, i) => i + 2000).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {selectedYear === "2024" && (
        <div className="form-group">
          <label>Select Month:</label>
          <select value={selectedMonth} onChange={handleMonthChange}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
      )}

      {loading ? (
        <p className="loading-text">Please wait! Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="table-container">
          <table className="mineral-revenue-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Mineral</th>
                {districts.map((district, index) => (
                  <th key={index}>{district}</th>
                ))}
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
              {minerals.map((mineral, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {mineral.icon} {mineral.name}
                  </td>
                  {districts.map((district, idx) => (
                    <td key={idx}>{renderCellValue(mineral, district)}</td>
                  ))}
                  <td>{sumColumn(mineral.name)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MineralRevenueTable;
