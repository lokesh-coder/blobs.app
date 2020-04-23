import React from 'react';
import logo from './logo.png';
import Button from 'uielements/button/button.component';
import './app.scss';
import './main.css';

export default function App() {
  return (
    <div className="bg-blue-900 flex flex-col justify-center items-center p-20">
        <p className="text-4xl text-blue-100">Welcom To React Boilerplate!</p>
        <img src={logo} className="app--image" />
        <Button  buttonText="Get Started!" />
    </div>
  );
}
