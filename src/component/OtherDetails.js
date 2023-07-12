function OtherDetails({ details }) {
  const currTime = new Date().toLocaleTimeString();
  return (
    <div>
      {details ? (
        <div className="other-details">
          <h1>{details.weather[0].description}</h1>
          <h4>
            Updated as of <span style={{ color: "red " }}>{currTime}</span>
          </h4>
          <div>
            <div>
              <span>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Feels Like
                </span>
                {Math.round(details.main.feels_like - 273.15)}° C
              </span>
              <span style={{ marginLeft: "20px", marginRight: "20px" }}>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Wind
                </span>
                {details.wind.speed} km/hr
              </span>
              <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                Visibility
              </span>
              {details.visibility / 1000} km
            </div>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
              <span>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Pressure
                </span>
                {details.main.pressure / 100} pa
              </span>
              <span style={{ marginLeft: "20px", marginRight: "20px" }}>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Humidity
                </span>
                {details.main.humidity} %
              </span>
              <span>
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Clouds
                </span>
                {details.clouds.all} %
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>Please Wait</div>
      )}
    </div>
  );
}
export default OtherDetails;
