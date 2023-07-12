import Tornado from "../assets/Tornado.mp4";
import Clear from "../assets/Clear.mp4";
import Clouds from "../assets/Clouds.mp4";
import Drizzle from "../assets/Drizzle.mp4";
import Dust from "../assets/Dust.mp4";
import Fog from "../assets/Fog.mp4";
import Haze from "../assets/Haze.mp4";
import Rain from "../assets/Rain.mp4";
import Snow from "../assets/Snow.mp4";
import Thunderstorm from "../assets/Thunderstorm.mp4";
import Header from "./Header";
import OtherDetails from "./OtherDetails";
import Temperature from "./Temperature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function WeatherReport({ data }) {
  const [videoBg, setVideoBg] = useState();

  function setBackgroundVideo() {
    if (data) {
      switch (data.weather[0].main) {
        case "Haze":
          setVideoBg(Haze);
          break;
        case "Tornado":
          setVideoBg(Tornado);
          break;
        case "Clouds":
          setVideoBg(Clouds);
          break;
        case "Drizzle":
          setVideoBg(Drizzle);
          break;
        case "Dust":
          setVideoBg(Dust);
          break;
        case "Sand":
          setVideoBg(Dust);
          break;
        case "Fog":
          setVideoBg(Fog);
          break;
        case "Smoke":
          setVideoBg(Fog);
          break;
        case "Rain":
          setVideoBg(Rain);
          break;
        case "Snow":
          setVideoBg(Snow);
          break;
        case "ThunderStorm":
          setVideoBg(Thunderstorm);
          break;
        case "Mist":
          setVideoBg(Haze);
          break;
        case "Clear":
          setVideoBg(Clear);
          break;
        default:
          setVideoBg(Clear);
      }
    }
  }

  useEffect(() => {
    setBackgroundVideo();
  }, [data]);

  return (
    <>
      {data && (
        <div>
          <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted></video>
          <Header />
          <div className="content">
            <div className="location">
              <FontAwesomeIcon icon={faLocationDot} />
              <div style={{ marginLeft: "10px" }}>
                {data.name}, {data.sys.country}
              </div>
            </div>
            <Temperature data={data} />
            <OtherDetails details={data} />
          </div>
        </div>
      )}
    </>
  );
}
export default WeatherReport;
