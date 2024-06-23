import React, { useState } from "react";
import axios from "axios";
import "./UpdateMineralRevenueForm.css"; // Import your CSS file for styles

const UpdateMineralRevenueForm = () => {
  const [formData, setFormData] = useState({
    year: "2000",
    month: "January",
    district: "Attock",
    mineral: "Limestone",
    value: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const { year, month, district, mineral, value } = formData;

    try {
      const response = await axios.put(
        `http://localhost:3000/api/mineral-revenues/${year}`,
        {
          [mineral]: parseInt(value), // Assuming 'value' should be parsed to integer
        }
      );

      if (response.data.success) {
        setSuccess("Mineral revenue data updated successfully!");
      } else {
        setError("Failed to update mineral revenue data.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error updating data:", error);
      setError(error.message || "Error updating data");
      setLoading(false);
    }
  };

  const minerals = [
    "Limestone",
    "Limestone_LSM",
    "Argillaceous_clay",
    "Bauxite",
    "Bentonite",
    "Brine",
    "Coal",
    "Coal_LSM",
    "China_Clay",
    "Dolomite",
    "Fireclay",
    "Fuller_Earth",
    "Gypsum",
    "Gypsum_LSM",
    "Iron_Ore",
    "Marble",
    "Ochers",
    "RockSalt",
    "RockSalt_LSM",
    "Silica_Sand",
    "Silica_Sand_LSM",
    "Ordinary_Salt",
    "Lake_Salt",
    "Sand_Gravel_LSM",
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
  ];

  // Determine months based on the selected year (2024 in this case)
  const availableMonths =
    formData.year === "2024"
      ? [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ]
      : ["January"];

  return (
    <div className="update-mineral-form-container">
      <h2>Update Mineral Revenue Data</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Month:</label>
          <select name="month" value={formData.month} onChange={handleChange}>
            {availableMonths.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>District:</label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
          >
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Mineral:</label>
          <select
            name="mineral"
            value={formData.mineral}
            onChange={handleChange}
          >
            {minerals.map((mineral) => (
              <option key={mineral} value={mineral}>
                {mineral}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Value:</label>
          <input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default UpdateMineralRevenueForm;
