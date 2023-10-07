
import { Route, Routes, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { Dashboard, ListagemDeCidades } from "../pages";

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
        icon: "location_city",
        path: "/cidades",
        label: "Cidades",
      },
    ]);
  }, []);
  
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/cidades" element={<ListagemDeCidades />} />
      {/* <Route path="/cidades/detalhe/:id" element={<ListagemDeCidades />} /> */}

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
