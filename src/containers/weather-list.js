import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => (((weather.main.temp-273)*(9/5))+32))
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    // const lat = cityData.city.coord.lat
    // const lon = cityData.city.coord.lon
    const {lon, lat} = cityData.city.coord // ES6 Magic



    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color="orange" units="F"/></td>
        <td><Chart data={pressures} color="green" units="hPA"/></td>
        <td><Chart data={humidities} color="black" units="%"/></td>
      </tr>
    )
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({weather}) {
  return {weather} // {weather:weather}
}
// same thing as ...
// function mapStateToProps (state) {
//   return {weather: state.weather}
// }

export default connect(mapStateToProps)(WeatherList)
