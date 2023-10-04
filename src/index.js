import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const RootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
    {/* Router to switch pages */}
    <App/>
</BrowserRouter>, RootElement);
