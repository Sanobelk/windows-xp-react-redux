import React from "react"
import {WinXP_Startup} from "./winXP_startup"; //WIN XP STARTUP PAGE

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            xp_loaded : false
        }
    }
    
    render(){

        //mimick Windows loading for a few seconds.
        setTimeout(() => { 
        if(this.state.xp_loaded == false){
            this.setState({
                ...this.state,
                xp_loaded : true
            })
            console.log('XP LOADED');
            }
        }, 10000);

        if(!this.state.xp_loaded){
            return (
                <WinXP_Startup/>
            )
        }else{
            return <h1>Windows has loaded</h1>
        }
    }
}

export {App}