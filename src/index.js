import React from "react";
import ReactDOM from "react-dom";
import {WinXP_Startup} from "./winXP_startup"; //WIN XP STARTUP PAGE

import {STORE} from "./store"; //REDUX STORE

/*CSS*/
import './index.css';
import './winXP_startup.css';



console.log(STORE.getState());

const ROOT = document.getElementById('root');
ReactDOM.render(<WinXP_Startup/>,ROOT);