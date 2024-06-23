import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";

const SearchFilters = ({ onSearch }) => {
  const [mineral, setMineral] = useState("");
  const [year, setYear] = useState("2000");

  const handleSearch = () => {
    onSearch(mineral, year);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <TextField
          label="Mineral"
          value={mineral}
          onChange={(e) => setMineral(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchFilters;
