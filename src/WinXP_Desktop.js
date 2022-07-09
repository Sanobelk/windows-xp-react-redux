import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import {StartMenuItem} from './startMenuItem';

class WinXP_Desktop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            startMenu : false,
            startMenuClicked : false,
            time : {
                hour : null,
                minute : null,
                ampm : null,
            },
            about : false,
            resume : false,
            other : false,
        }


        this.toggleStartMenu = this.toggleStartMenu.bind(this);
        this.checkMenuOpen = this.checkMenuOpen.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.openAbout = this.openAbout.bind(this);
        this.openResume = this.openResume.bind(this);
        this.openOther = this.openOther.bind(this);
    }

    toggleStartMenu = () => { //toggles start menu
        
        this.setState({
            ...this.state,
            startMenu : !this.state.startMenu,
            startMenuClicked : true,
        })
        console.log(this.state);
    }

    checkMenuOpen = () =>{ //if Menu is opened (and user clicks on desktop), close the menu.
        if(this.state.startMenuClicked){
            this.setState({
                ...this.state,
                startMenu : false,
                startMenuClicked : false
            })
        }
        console.log(this.state);
    }

    updateTime = () =>{
        let date = new Date();
        let hour;
        let minute;
        let ampm;
        hour = date.getHours();
        minute = date.getMinutes();

        /*SET AMPM*/
        if(hour > 12){
            ampm = 'AM'
        }else if (hour <= 12){
            ampm = 'PM'
        }
        /*CONVERT 24 HOUR INTO 12 HOUR TIME*/
        hour = hour % 12 || 12;

        /*SET THE HOUR*/
        if(hour % 12 >= 0){
            this.setState({
                ...this.state,
                time : {
                    hour,
                    minute,
                    ampm,
                }
            })
        }else if (hour % 12 < 0){
            this.setState({
                ...this.state,
                time : {
                    hour,
                    minute,
                    ampm,
                }
            })
        }
        /*SET THE MINUTES*/
        if(minute > 10){
            this.setState({
                ...this.state,
                time : {
                    hour,
                    minute,
                    ampm,
                }
            })
        }
    }

    componentDidMount(){
        setInterval(()=>{
           this.updateTime(); 
        },1000)
    }

    handleMenuClick = function(){
        this.toggleStartMenu();
    }

    openAbout = function(){
            this.setState({
                ...this.state,
                about : true,
                startMenu : false,
                startMenuClicked : false,
            })}
    openResume = function(){
            this.setState({
                ...this.state,
                resume : true,
                startMenu : false,
                startMenuClicked : false,
            })}

    openOther = function(){
            this.setState({
                ...this.state,
                other : true,
                startMenu : false,
                startMenuClicked : false,
            })}

    render(){

        /*adding 0 in front of minute if its less than 10.*/
        let minute = null;
        if(this.state.time.minute > 10){
            minute = this.state.time.minute
        }else{
            minute = '0' + this.state.time.minute;
        }


        return (
        <div className="WinXP_Desktop_Container">
            <div className="DesktopArea" onClick={this.checkMenuOpen}>
            
            
            </div>
            <div className="Taskbar">
                <div className="Taskbar--StartMenuButton" onClick={this.toggleStartMenu}>START</div>
                <div className="Taskbar--MiddleArea"></div>
                <div className="Taskbar--RightArea">
                
                    <span id="timeClock">
                        <span id="timeClockHour">{this.state.time.hour}</span> 
                            : 
                        <span id="timeClockMinute">{
                            minute
                        } </span>
                        <span id="timeClockAMPM">{this.state.time.ampm}</span>
                    </span>
                
                </div>
            </div>
            {this.state.startMenu &&
                    <div className="startMenu">
                        <div className="startMenu--Top">
                            <p className="startMenu--Top--UserName" onClick={this.props.restartPC}>Admin</p>
                        </div>
                        <div className="startMenu--Middle">
                            <div className="startMenu--Middle--Left">   
                                <button onClick={()=>{
                                    this.openAbout();
                                }}>
                                    <StartMenuItem icon="/images/icons/people.png" title="About" />
                                </button>
                                <button onClick={()=>{
                                    this.openResume();
                                }}>
                                <StartMenuItem icon="/images/icons/resume.png" title="Resume" action={this.handleMenuClick}/>
                                </button>
                                <button onClick={()=>{
                                    this.openOther();
                                }}>
                                <StartMenuItem icon="/images/icons/windows.png" title="Other" action={this.handleMenuClick}/>
                                </button>
                            </div>
                            <div className="startMenu--Middle--Right" onClick={()=> console.log(this.state)}>right</div>
                        </div>
                        <div className="startMenu--Bottom"></div>
                    </div>
                }
        </div>

        )
    }
}

export {WinXP_Desktop}