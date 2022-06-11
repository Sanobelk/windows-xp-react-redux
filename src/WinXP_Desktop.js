import React from 'react';

class WinXP_Desktop extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            
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

        setTimeout(()=>{
             document.querySelector('.DesktopArea').style.height="95%"; //because originally its 100%.
        },3000)
       


        return (
        
        <div className="WinXP_Desktop_Container">
            <div className="DesktopArea">
            
            
            </div>
            <div className="Taskbar">
                <div className="Taskbar--StartMenuButton">START</div>
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
        
        </div>

        )
    }
}

export {WinXP_Desktop}