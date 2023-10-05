import { Button } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOption } = useDrawerContext();

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
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            Menu
          </Button>
        }
      />

      <Route
        path="/star"
        element={
          <Button
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}
          >
            Menu
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
