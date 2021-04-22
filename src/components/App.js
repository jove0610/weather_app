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
      tempUnit: '',
    };
  }

  submitCallback = (inputCity, unit) => {
    this.setState({ resAPI: inputCity, tempUnit: unit });
  };

  renderOptions = () => {
    const { resAPI, tempUnit } = this.state;

    if (resAPI.status === 200) {
      return <WeatherCard city={resAPI} tempUnit={tempUnit} />;
    }
    if (resAPI.status === undefined) {
      return null;
    }
    return <MessageCard message={resAPI} />;
  };

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
