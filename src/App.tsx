import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppAdmin from "./admin/AppAdmin";
import AppCustomer from "./client/AppCustomer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AppAdmin />} />
        <Route path="/*" element={<AppCustomer />} />
      </Routes>
    </Router>
  );
};

export default App;
