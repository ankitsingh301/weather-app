import { useEffect, useState } from "react";

function Temperature({ data }) {
  const [active, setActive] = useState("celsius");
  const [temp, setTemp] = useState(null);
  const icon =
    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  function handleCeliusClick() {
    if (active === "fahrenheit") {
      const celsius = Math.round((temp - 32) / 1.8);
      setTemp(celsius);
    }
    setActive("celsius");
  }
  function handleFahrenheitClick() {
    if (active === "celsius") {
      setTemp(Math.round(temp * 1.8 + 32));
    }
    setActive("fahrenheit");
  }
  useEffect(() => {
    if (data) {
      const currentTemp = Math.round(data.main.temp - 273.15);
      setTemp(currentTemp);
      setActive("celsius");
    }
  }, [data]);
  return (
    <div className="temperature">
      <img src={icon} width="100px" height="100px"></img>
      <div className="degree">{temp}°</div>
      <div className="unit">
        <div
          className={`${
            active === "celsius" ? "active-unit" : "deactive-unit"
          }`}
          onClick={handleCeliusClick}
        >
          C
        </div>
        <div
          className={`${
            active === "fahrenheit" ? "active-unit" : "deactive-unit"
          }`}
          onClick={handleFahrenheitClick}
        >
          F
        </div>
      </div>
    </div>
  );
}
export default Temperature;
