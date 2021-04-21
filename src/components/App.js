import React from 'react';
import FormWeather from './FormWeather';
import WeatherCard from './WeatherCard';
import MessageCard from './MessageCard';
import styles from '../style.module.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      resAPI: '',
    };

    this.tempUnit = '';

    this.submitCallback = (inputCity, unit) => {
      this.tempUnit = unit;
      this.setState({ resAPI: inputCity });
    };

    this.renderOptions = () => {
      const { resAPI } = this.state;

      if (resAPI.status === 200) {
        return <WeatherCard city={resAPI} tempUnit={this.tempUnit} />;
      }
      if (resAPI.status === undefined) {
        return null;
      }
      return <MessageCard message={resAPI} />;
    };
  }

  render() {
    return (
      <div className={styles.app}>
        <FormWeather submitCallback={this.submitCallback} />
        {this.renderOptions()}
      </div>
    );
  }
}

export default App;
