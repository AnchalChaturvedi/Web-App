import React from "react"

const Conditions = props => {
  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div>
          <h1 className="fw-bold">{props.responseObj.name}</h1>
          It is currently{" "}
          <p className="fw-bold" style={{ fontSize: "2.2rem", margin: "10px" }}>
            {Math.round(props.responseObj.main.temp)}&#176;
            {props.unit === "metric" ? "C" : "F"}
          </p>{" "}
          out with {props.responseObj.weather[0].description}.
          <img
            src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Conditions
