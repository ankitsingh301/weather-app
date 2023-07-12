import Header from "./Header";

function LocationDenied() {
  return (
    <div>
      <Header />
      <h1 style={{ marginTop: "100px" }}>
        PLEASE <span style={{ color: "red" }}>TURN ON YOUR LOCATION </span>OR{" "}
        <span style={{ color: "red" }}>SEARCH FOR CITY</span> TO GET CURRENT
        WEATHER UPDATE
      </h1>
    </div>
  );
}
export default LocationDenied;
