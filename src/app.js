import React from "react"
import {WinXP_Startup} from "./winXP_startup"; //WIN XP STARTUP PAGE
import {WinXP_Login} from "./winXP_login"; // WIN XP LOGIN PAGE
import {WinXP_Desktop} from "./WinXP_Desktop" //WIN XP DESKTOP 

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            xp_loaded : false,
            userLoggedIn : false,
        }
        this.restartPC = this.restartPC.bind(this);
        this.startingUp = this.startingUp.bind(this);
        this.userLoggedIn = this.userLoggedIn.bind(this);
    }

    restartPC = () => {
        console.log(this.state);
        this.setState({
            ...this.state,
            xp_loaded : false,
            userLoggedIn : false,
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
            }
        }, 10000);
    }

    userLoggedIn = () =>{
        console.log('user logged in');
        this.setState({
            ...this.state,
            userLoggedIn : true,
        })
        console.log(this.state);
    }
    render(){
        

        if(!this.state.xp_loaded){
                this.startingUp(); //starts up XP
            return (
                <WinXP_Startup/>
            )
        }
        if(this.state.xp_loaded && !this.state.userLoggedIn){
            return <WinXP_Login restartPC={this.restartPC} userLoggedIn ={this.userLoggedIn}/>
        }

        if (this.state.xp_loaded && this.state.userLoggedIn){
            return <WinXP_Desktop restartPC={this.restartPC} />
        }
        
    }
}

export {App}