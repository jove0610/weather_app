import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from '../style.module.css';

class FormWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      unit: '',
    };
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onRadioClick = (tempUnit) => {
    this.setState({ unit: tempUnit });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const { submitCallback } = this.props;
    const { unit, input } = this.state;

    const res = await axios
      .get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: input,
          appid: '579fd364faebae12bc5fa73c09e893e3',
          units: unit,
        },
      })
      .then((data) => data)
      .catch((err) => err.request);

    submitCallback(res, unit);
  };

  render() {
    const { input } = this.state;

    return (
      <form onSubmit={this.onFormSubmit} className={styles.form}>
        <header>
          <h1>Weather App</h1>
        </header>

        <input
          className={styles.formInput}
          type='text'
          value={input}
          placeholder='Enter Name of City'
          onChange={this.onInputChange}
          required
        />

        <label htmlFor='celsius' className={styles.formTempLabel}>
          <input
            type='radio'
            id='celsius'
            name='temp'
            onClick={() => this.onRadioClick('metric')}
            required
          />
          Celsius
        </label>

        <label htmlFor='fahrenheit' className={styles.formTempLabel}>
          <input
            type='radio'
            id='fahrenheit'
            name='temp'
            onClick={() => this.onRadioClick('imperial')}
            required
          />
          Fahrenheit
        </label>

        <button type='submit' className={styles.formSubmitBtn}>
          Submit
        </button>
      </form>
    );
  }
}

FormWeather.propTypes = {
  submitCallback: PropTypes.func.isRequired,
};

export default FormWeather;
