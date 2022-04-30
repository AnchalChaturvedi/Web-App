import React, { useState } from "react"
import Conditions from "../Conditions/Conditions"
import Clock from "../Clock/Clock"
import Calendar from "../Calendar/Calendar"
import Monday from "../../images/animated/day.svg"
import Tuesady from "../../images/animated/cloudy-day-1.svg"
import Wednesday from "../../images/animated/rainy-7.svg"
import Thursday from "../../images/animated/snowy-4.svg"
import Friday from "../../images/animated/thunder.svg"
import Weather from "../../images/animated/cloudy-day-3.svg"

const Forecast = () => {
  let [error, setError] = useState(false)
  let [loading, setLoading] = useState(false)
  let [city, setCity] = useState("")
  let [unit, setUnit] = useState("imperial")
  let [responseObj, setResponseObj] = useState({})
  const uriEncodedCity = encodeURIComponent(city)
  function getForecast(e) {
    e.preventDefault()
    if (city.length === 0) {
      return setError(true)
    }
    setError(false)
    setResponseObj({})

    setLoading(true)

    let uriEncodedCity = encodeURIComponent(city)

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        "X-RapidAPI-Key": "f15e475c41msh72472007bc3b925p198431jsne1f2787ba6ca",
      },
    }

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      options
    )
      .then(response => response.json())
      .then(response => {
        if (response.cod !== 200) {
          throw new Error()
        }
        setResponseObj(response)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setLoading(false)
        console.log(err.message)
      })
  }

  return (
    <div className="container container-2 text-center py-5">
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={e => setCity(e.target.value)}
        />

        <label style={{ fontSize: "1.5rem", margin: "10px" }}>
          <input
            type="radio"
            className="form-check-input"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={e => setUnit(e.target.value)}
          />
          Fahrenheit{" "}
        </label>

        <label style={{ fontSize: "1.5rem", margin: "10px" }}>
          <input
            type="radio"
            className="form-check-input"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={e => setUnit(e.target.value)}
          />
          Celcius
        </label>

        <button type="submit" className="btn btn-primary btn-lg">
          Get Forecast
        </button>
      </form>

      <div className="container text-center py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-sm-12">
            <div
              className="card shadow mb-4"
              style={{ height: "auto", width: "100%" }}
            >
              <div className="icon">
                <Weather />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <Conditions responseObj={responseObj} unit={unit} />
          </div>
          <div className="col-lg-4 col-sm-12">
            <Clock />
          </div>
        </div>
      </div>

      <div className="container container-3 text-center py-5">
        <h2 className="py-5">5-Day Forcast</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-2 col-sm-12">
            <div className="card shadow mb-4">
              <div className="icon">
                <Monday />
              </div>

              <div className="fw-bold text-danger">35&#176;C</div>
              <div className="fw-bold">Monday</div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12">
            <div className="card shadow mb-4">
              <div className="icon">
                <Tuesady />
              </div>
              <div className="fw-bold text-danger">35&#176;C</div>
              <div className="fw-bold">Tuesday</div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12">
            <div className="card shadow mb-4">
              <div className="icon">
                <Wednesday />
              </div>
              <div className="fw-bold text-danger">38&#176;C</div>
              <div className="fw-bold">Wednesday</div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12">
            <div className="card shadow mb-4">
              <div className="icon">
                <Thursday />
              </div>
              <div className="fw-bold text-danger">33&#176;C</div>
              <div className="fw-bold">Thursday</div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12">
            <div className="card shadow mb-4">
              <div className="icon">
                <Friday />
              </div>
              <div className="fw-bold text-danger">36&#176;C</div>
              <div className="fw-bold">Friday</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-4 text-center py-5">
        <h2 className="py-5">Calendar</h2>
        <Calendar />
      </div>
    </div>
  )
}

export default Forecast
