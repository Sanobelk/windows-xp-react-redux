import React from "react";

class WinXP_Startup extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        
            <div className="WinXP_Startup_Container">

                <div className="WinXP_Startup_Container_Top">

                    <div className="WinXP_Logo">

                        <div className="WinXP_Logo_Text">
                            <p> Microsoft <br/>
                                <span className="WindowsTxt">Windows</span>
                                <span className="WindowsTxtXP">xp</span>
                            </p>
                        </div>
                        <div className="WinXP_Logo_Img">
                            <img src="/images/xp-logo.png"></img>
                        </div>

                    </div>
                        
                    <div className="WinXP_Loading_Bar">
                        <div className="WinXP_Loading_Bar_Bundle">
                            <div className="WinXP_Loading_Bar_Box"></div>
                            <div className="WinXP_Loading_Bar_Box"></div>
                            <div className="WinXP_Loading_Bar_Box"></div>
                        </div>
                    
                    </div>

                </div>

                <div className="WinXP_Startup_Copyright">
                
                </div>

                <div className="WinXP_Startup_MS_Logo">
                
                </div>
            
            </div>

        )
    }
        
}

export {WinXP_Startup};