import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrentLocation from "./pages/CurrentLocationReport";
import CityWeatherReport from "./pages/CityWeatherReport";

export const ROOT = "/";
export const SEARCH_CITY = "/city/:cityName";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<CurrentLocation />}></Route>
        <Route path={SEARCH_CITY} element={<CityWeatherReport />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
