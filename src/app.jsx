import React from 'react';
import logo from './logo.png';
import './app.scss';

export default function App() {
  return (
    <div className="App--Container">
      <p className="App--Title">Welcome To React Boilerplate!</p>
      <img src={logo} alt="React Logo" className="App--Image" />
    </div>
  );
}
