import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app"

/*CSS*/
import './index.css';
import './winXP_startup.css';
import './winXP_login.css';

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});


const ROOT = document.getElementById('root');
ReactDOM.render(<App/>,ROOT);