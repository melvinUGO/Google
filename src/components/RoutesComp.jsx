import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Results from "./Results";
import Search from "./Search";

const RoutesComp = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/imagesearch" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};

export default RoutesComp;
