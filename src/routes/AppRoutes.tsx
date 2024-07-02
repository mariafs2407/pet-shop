import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../PetCate/pages/HomePage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
