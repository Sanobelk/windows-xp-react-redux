import React from "react"


class WinXP_Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="WinXP_Login_Container">
            
                <div className="Login_Top_Bar">
                    
                </div>

                <div className="Login_Middle_Section">
                    <div className="Login_Middle_Section--left">
                        <img src="images/windows-xp-logo-login.png"/><br/>
                        To begin, click your username.
                    </div>
                    <div className="Login_Middle_Section--right">
                        <p>Users components go here.</p>
                    </div>
                </div>

                <div className="Login_Bottom_Bar">
                    <div className="Login_Bottom_Bar--left" onClick={this.props.restartPC}>
                        <img src="images/icons/shutoff_button.png"/>
                        <p>Turn off computer</p>
                    </div>
                    <div className="Login_Bottom_Bar--right">
                        <p>Welcome to my in browser Windows XP Experience. I hope you enjoy it.</p>
                    </div>
                </div>
            
            </div>
        )
    }
}

export {WinXP_Login}