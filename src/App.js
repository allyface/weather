import React, { Component } from 'react';

import './css/weather-icons.css';
import './App.css';



// function WeatherTemp(props) {
//   return (
//
//   );
// }
//
// function WeatherLocation(props) {
//   return (
//
//   );
// }
//
// function WeatherConditions(props) {
//   return (
//
//   );
// }
//
// function GetLocation (props) {
//   return (
//     <div>
//     </div>
//   );
// }
class Icon extends Component {

  render(){
    let time = 'day-'
    console.log(this.props.id)
    if (this.props.icon) {
      if (this.props.icon.charAt(2)==='n')
        time = 'night-'
    }
    let iconCode = 'wi wi-owm-'+time+this.props.id
    return (
      <div className={iconCode}>

      </div>
    );
  }
}


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      iconCode : null,
      tempF : null,
      city : null,
      desc : null,
    }

  }

  componentDidMount()
  { fetch('http://api.openweathermap.org/data/2.5/weather?zip=94610&APPID=6250e9bf0654ca712ab90271e782f17b')
      .then(function(response) {
        return response.json()
      })
      .then(res => {
        console.log(res)
        let kelvin = res.main.temp
        let fern = Math.round((kelvin  * (9/5) - 459.67) * 10) /10

        this.setState({city:res.name})
        this.setState({desc:res.weather[0].description})
        this.setState({tempF:fern})
        this.setState({icon:res.weather[0].icon})
        this.setState({id:res.weather[0].id})

        // this.setState({result:res})
      });
  }

  render() {
    return (
      <div className="App">

        {/* <GetLocation setLocation={this.setLocation}/> */}
        <div className="content">
          <p>{this.state.city}
          </p><p>
          {this.state.desc}
        </p><p>
        {this.state.tempF}
      </p>
<Icon id={this.state.id} icon={this.state.icon} />
        </div>
      </div>
    );
  }
}

export default App;
