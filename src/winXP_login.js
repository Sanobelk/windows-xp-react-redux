import React from "react"


class WinXP_Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="WinXP_Login_Container">
            
                <div className="Login_Top_Bar">
                    Top Bar
                </div>

                <div className="Login_Middle_Section">
                    <div className="Login_Middle_Section--left">
                        <img src="images/windows-xp-logo-login.png"/>
                    </div>
                    <div className="Login_Middle_Section--right">
                        <p>Users will go here.</p>
                    </div>
                </div>

                <div className="Login_Bottom_Bar">
                    <p>Turn off computer</p>
                    <p>Welcome to my in browser Windows XP Experience. I hope you enjoy it.</p>
                </div>
            
            </div>
        )
    }
}

export {WinXP_Login}