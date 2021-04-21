import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.module.css';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);

    this.unit = () => {
      const { tempUnit } = this.props;
      if (tempUnit === 'metric') {
        return 'ºC';
      }
      return 'ºF';
    };
  }

  render() {
    const { city } = this.props;
    const { main, name, sys, weather } = city.data;
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();

    return (
      <section className={styles.weatherCard}>
        <h2
          className={styles.weatherCardHeader}
        >{`${name}, ${sys.country}`}</h2>
        <p>{`Temp: ${main.temp} ${this.unit()}`}</p>
        <p>{`Feels Like: ${main.feels_like} ${this.unit()}`}</p>
        <br />
        <p>{`Humidity: ${main.humidity}%`}</p>
        <p>{`Weather: ${weather[0].main}`}</p>
        <p>{`Sky: ${weather[0].description}`}</p>
        <br />
        <p>{`Sunrise: ${sunrise}`}</p>
        <p>{`Sunset: ${sunset}`}</p>
      </section>
    );
  }
}

WeatherCard.propTypes = {
  city: PropTypes.shape.isRequired,
  tempUnit: PropTypes.string.isRequired,
};

export default WeatherCard;
