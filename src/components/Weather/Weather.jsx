import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import moment from 'moment';

import _snakeCase from 'lodash/snakeCase';
import _floor from 'lodash/floor';

import TiWeatherSunny from 'react-icons/lib/ti/weather-sunny';
import TiWaves from 'react-icons/lib/ti/waves';
import TiWeatherCloudy from 'react-icons/lib/ti/weather-cloudy';
import TiWeatherShower from 'react-icons/lib/ti/weather-shower';
import TiWeatherSnow from 'react-icons/lib/ti/weather-snow';
import TiWeatherStormy from 'react-icons/lib/ti/weather-stormy';
import TiWeatherPartlySunny from 'react-icons/lib/ti/weather-partly-sunny';
import TiTime from 'react-icons/lib/ti/time';

import cx from 'classnames';
import css from './Weather.css';

class Weather extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    withImage: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      icon: null,
      date: null,
      temperature: null,
    };
  }

  componentDidMount() {
    const location = _snakeCase(this.props.city);

    axios.get(`http://api.wunderground.com/api/ec33feb932456591/conditions/q/${location}.json`)
      .then((result) => {
        this.setState({
          icon: result.data.current_observation.icon,
          date: result.data.current_observation.observation_epoch,
          temperature: result.data.current_observation.temp_c,
          isLoading: false,
        });
      })
  }

  renderIcon(icon) {
    switch (icon) {
      case 'rain':
        return <TiWeatherShower size={64} />;
      case 'cloudy':
      case 'mostlycloudy':
        return <TiWeatherCloudy size={64} />;
      case 'fog':
      case 'hazy':
        return <TiWaves size={64} />;
      case 'snow':
      case 'sleet':
        return <TiWeatherSnow size={64} />;
      case 'sunny':
      case 'clear':
        return <TiWeatherSunny size={64} />;
      case 'tstorms':
      case 'tstorm':
        return <TiWeatherStormy size={64} />;
      default:
        return <TiWeatherPartlySunny size={64} />;
    }
  }

  render() {
    let image = null;
    if (this.props.withImage && !this.state.isLoading) {
      image = `http://loremflickr.com/600/600/landscape,${this.state.icon}/all`;
    }

    const momentDate = moment.unix(this.state.date).format('ddd, DD-YYYY');

    return (
      <div className={cx(css.weather, {[css.withImage]: this.props.withImage})} style={{ backgroundImage: `url(${image})` }}>
        <span className={css.overlay} />
        <h2 className={css.weatherTitle}>{this.props.title}</h2>

        {this.state.isLoading ?
          <div className={css.loading}>
            <TiTime size="50" />
          </div>
        :
          <div className={css.content}>
            <div className={css.condition}>
              <span className={css.icon}>{this.renderIcon(this.state.icon)}</span>
              {_floor(this.state.temperature)}&deg;C
            </div>
            <div className={css.date}>{momentDate}</div>
          </div>
        }
      </div>
    );
  }
}

export default Weather;
