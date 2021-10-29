import React from "react";
import "./styles.scss";
import {Provider as ReduxProvider} from "react-redux";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import store from "./redux/store";
import Scene from './components/scene/scene'
import ButtonGroup from "./components/button-group/button-group";

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 3000,
    offset: '10px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

export default function App() {
    return (
        <ReduxProvider store={store}>
            <AlertProvider template={AlertTemplate} {...options}>
                <div className="App">
                    <Scene />
                    <ButtonGroup />
                </div>
            </AlertProvider>
        </ReduxProvider>
    );
}

