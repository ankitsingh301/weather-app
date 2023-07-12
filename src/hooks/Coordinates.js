import { useEffect, useState } from "react";

function useCurrentCoordinateData() {
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  function getCoordinate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getData(latitude, longitude);
        },
        (error) => {
          if (error.message === "User denied Geolocation") {
            setErrorMessage(true);
          } else {
            setErrorMessage(false);
          }
        }
      );
    } else {
      alert("Geolocation not available");
    }
  }
  async function getData(lat, long) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
      );
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCoordinate();
  }, []);
  return { data, errorMessage, loading };
}

export default useCurrentCoordinateData;
