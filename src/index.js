import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app"

/*CSS*/
import './index.css';
import './winXP_startup.css';
import './winXP_login.css';
import './winxp_desktop.css'; //winXP_desktop.css will not work for some strange reason.
import './startMenuItem.css';
import './WinXP_Desktop_Window.css';


const ROOT = document.getElementById('root');
ReactDOM.render(<App/>,ROOT);