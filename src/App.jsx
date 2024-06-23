// // src/App.js

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import MineralRevenueTable from "./components/MineralRevenueTable";

// function App() {
//   return (
//     <div className="App">
//       <MineralRevenueTable />
//     </div>
//   );
// }

// export default App;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MineralRevenueTable from "./components/MineralRevenueTable";
// import UpdateMineralRevenueForm from "./components/UpdateMineralRevenueForm";
// import MineralStatistics from "./components/MineralStatistics";

import "./App.css"; // Import your CSS file for styles

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* <nav> */}
        {/* <ul> */}
        {/* <li>
              <Link to="/">View Mineral Production System Yearwise Data</Link>
            </li> */}
        {/* <li>
              <Link to="/statistics">Mineral Statistics</Link>
            </li>
            <li>
              <Link to="/update">Update Mineral Revenue Data</Link>
            </li> */}
        {/* </ul> */}
        {/* </nav> */}
        <Routes>
          <Route path="/" element={<MineralRevenueTable />} />
          {/* <Route path="/update" element={<UpdateMineralRevenueForm />} />
          <Route path="/statistics" component={MineralStatistics} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
