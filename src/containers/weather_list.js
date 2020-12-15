import React, {Component } from 'react';

import {connect} from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/Google_map';


class WeatherList extends Component{

    renderList(cityData){
        const temp = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord;

        return (

            <tr key={cityData.city.name}>
                <td className="googlemap"> <GoogleMap lon={lon} lat={lat} /> </td>
                <td><Chart data={temp} color="green" unit="K" /></td>
                <td><Chart data={pressure} color="purple" unit="Kpa" /></td>
                <td><Chart data={humidity} color="tomato" unit="%" /></td>
              
            </tr>
        )
    }
    render(){
        return (
            <table>
                <thead>
                  <tr>
                   <th>City</th>
                   <th>temperature</th>
                   <th>Pressure</th>
                   <th>Humidity</th>
                  </tr>
                </thead>

                <tbody>
                    {this.props.weather.map(this.renderList)}
                </tbody>
            </table>
        )
    }
}

function mapStatetoProps({ weather }){
    return {
        weather
    }
}

export default connect(mapStatetoProps)(WeatherList)