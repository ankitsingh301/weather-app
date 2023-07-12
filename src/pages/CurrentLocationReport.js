import LocationDenied from "../component/LocationDenied";
import WeatherReport from "../component/WeatherReport";
import useCurrentCoordinateData from "../hooks/Coordinates";

function CurrentLocation() {
  const { data, errorMessage, loading } = useCurrentCoordinateData();

  if (loading) {
    return (
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        Detecting Your Location. Please Wait.......
      </div>
    );
  }

  return errorMessage ? (
    <LocationDenied />
  ) : (
    <WeatherReport data={data && data} />
  );
}
export default CurrentLocation;
