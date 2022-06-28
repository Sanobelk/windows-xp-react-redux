import React from 'react';

class WinXP_Desktop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            startMenu : false,
            startMenuClicked : false,
        }


        this.toggleStartMenu = this.toggleStartMenu.bind(this);
        this.checkMenuOpen = this.checkMenuOpen.bind(this);
    }

    toggleStartMenu = () => { //toggles start menu
        
        this.setState({
            ...this.state,
            startMenu : !this.state.startMenu,
            startMenuClicked : true,
        })
    }

    checkMenuOpen = () =>{ //if Menu is opened (and user clicks on desktop), close the menu.
        if(this.state.startMenuClicked){
            this.setState({
                ...this.state,
                startMenu : false,
                startMenuClicked : false
            })
        }
    }

    render(){

        /*CLOCK*/

        //Maybe throw this into state.

        let date = new Date();
        let hour
        let minute
        
        setInterval((clock)=>{
            hour = date.getHours();
            hour = hour % 12 || 12;
            minute = date.getMinutes();
            if(minute > 10){
                document.getElementById('timeClockMinute').textContent = minute;
            }else if( minute <10){
                document.getElementById('timeClockMinute').textContent = `0${minute}`
            }
            document.getElementById('timeClockHour').textContent = hour;
            
        },100);

        /*     */
        

        /* immitation lag taskbar */

        /*setTimeout(()=>{
             document.querySelector('.DesktopArea').style.height="95%"; //because originally its 100%.
        },3000)
       */


        return (
        
        <div className="WinXP_Desktop_Container">
            <div className="DesktopArea" onClick={this.checkMenuOpen}>
            
            
            </div>
            <div className="Taskbar">
                <div className="Taskbar--StartMenuButton" onClick={this.toggleStartMenu}>START</div>
                <div className="Taskbar--MiddleArea"></div>
                <div className="Taskbar--RightArea">
                
                    <span id="timeClock">
                        <span id="timeClockHour"></span> 
                            : 
                        <span id="timeClockMinute"></span>
                        <span id="timeClockAMPM"></span>
                    </span>
                
                </div>
            </div>
            {this.state.startMenu &&
                    <div className="startMenu">

                    </div>
                }
        </div>

        )
    }
}

export {WinXP_Desktop}