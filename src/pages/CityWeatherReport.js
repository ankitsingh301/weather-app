import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ROOT } from "../App";
import WeatherReport from "../component/WeatherReport";
import { useFetch } from "../hooks/FetchData";

function CityWeatherReport() {
  const { cityName } = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  const { data, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  );
  useEffect(() => {
    console.log("DATTA>>>>>", data);
  }, [data]);
  if (loading) {
    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
      Please Wait.......
    </div>;
  }
  if (data) {
    return (
      <>
        {data.cod === 200 ? (
          <WeatherReport data={data} />
        ) : (
          <div>
            No such city found <a href={ROOT}>Go Back</a>
          </div>
        )}
      </>
    );
  }
  return (
    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
      Fetching weather details. Please Wait.......
    </div>
  );
}
export default CityWeatherReport;
