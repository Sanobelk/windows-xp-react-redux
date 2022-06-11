import React from "react"
import {WinXP_Startup} from "./winXP_startup"; //WIN XP STARTUP PAGE
import {WinXP_Login} from "./winXP_login"; // WIN XP LOGIN PAGE

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            xp_loaded : false
        }
        this.restartPC = this.restartPC.bind(this);
        this.startingUp = this.startingUp.bind(this);
    }

    restartPC = () => {
        console.log(this.state);
        this.setState({
            ...this.state,
            xp_loaded : false,
        })
        console.log(this.state);
        
    }

    startingUp = () =>{
        setTimeout(() => { 
        if(this.state.xp_loaded == false){
            this.setState({
                ...this.state,
                xp_loaded : true
            })
            console.log('XP LOADED');
            }
        }, 10000);
    }
    
    render(){
        

        if(this.state.xp_loaded){
            setTimeout(()=>{
                this.startingUp(); //starts up XP
            })
            return (
                <WinXP_Startup/>
            )
        }else{
            return <WinXP_Login restartPC={this.restartPC}/>
        }
    }
}

export {App}