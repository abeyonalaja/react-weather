import React, { Component } from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

export default function Weather() {
  return (
    <div className="">
      <h3>Weather Component</h3>
      <WeatherForm />
      <WeatherMessage />
    </div>
  );
};
