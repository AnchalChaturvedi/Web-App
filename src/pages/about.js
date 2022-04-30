import React from "react"
import styled from "styled-components"
import Team from "../components/Team/Team"
import Layout from "../components/Layout/Layout"

const About = () => {
  return (
    <Layout>
      <Container>
        <Heading>
          <h3>WEATHER FORECASTING APP:-</h3>
        </Heading>
        <Placesarea>
          <ul>
            <li>
              Weather application is a web based application through which you
              will be able to get all the reports related to weather forecasting
              of any location
            </li>
            <li>
              {" "}
              Its geographical locator which will be received through your
              browser setting and server configuration will automatically
              identify the location and be able to present its weather details
              such as temperature, weathers like sunny,rainy,cloudy,cold etc
            </li>
            <li>
              Undoubtedly, weather forecasting has come a long way, helping
              people to know about weather conditions. So, if you are in an area
              where weather frequently changes from sunny to torrential rain in
              a matter of minutes, then what is the easiest way to make sure to
              be prepared for. A suitable answer is a weather application.
            </li>
            <li>
              This system can be used in Air,Traffic, Marine, Agriculture,
              Forestry, Military, and Navy etc{" "}
            </li>
            <li>
              Helps people plan outdoor activities (i.e. to see if
              rain/storms/cold weather will impact outdoor event)
            </li>
            <li>
              Helps people prepare if they need to take extra gear to prepare
              for the weather(i.e.umbrella, rain coat,sun screen)
            </li>
            <li>
              Helps businesses plan for transportation hazards that can result
              from the weather(i.e. fog, snow, ice, storms, clouds as it relates
              to driving and flying for example)
            </li>
            <li>
              Weather applications continuously update their forecasts, whether
              it is by the day, hour or minute, so it always takes us one step
              ahead.The best weather apps for Android are like pocket weather
              channels.
            </li>
          </ul>
        </Placesarea>
      </Container>
      <Team />
    </Layout>
  )
}
const Container = styled.div`
  border-radius: 2rem;
  height: 80vh;
  padding: 2rem;
  margin: 2rem 4rem;
  box-shadow: 1px 1px 1px 1px #000000;
  font-family: var(--my-fonts);
  overflow-y: scroll;
`
const Heading = styled.div`
  h3 {
    background-color: red;
    padding: 1rem;
    margin: 2rem 2rem;
    font-size: 2.5rem;
  }
`

const Placesarea = styled.div`
li{
  font-size:1.7rem;
}
`

export default About
