import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Results from "./Results";

const RoutesComp = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/WebSearchAPI" />}
        />
        <Route path="/WebSearchAPI" element={<Results />} />
        <Route path="/ImageSearchAPI" element={<Results />} />
        <Route path="/NewsSearchAPI" element={<Results />} />
      </Routes>
    </div>
  );
};

export default RoutesComp;
