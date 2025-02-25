import { Route, Routes } from "react-router";
import { HomeComponent } from "./components/home";
import { CarDetailComponent } from "./components/car-detail";
import { Layout } from "./components/layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeComponent />} />
        <Route path="details" element={<CarDetailComponent />} />
      </Route>
    </Routes>
  );
}
