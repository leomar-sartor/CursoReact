
import { Route, Routes, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOption } = useDrawerContext();

  useEffect(() => {
    setDrawerOption([
      {
        icon: "home",
        path: "/home",
        label: "Página Inicial",
      },
      {
        icon: "star",
        path: "/star",
        label: "Cidades",
      },
    ]);
  }, []);
  
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Dashboard />
        }
      />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
