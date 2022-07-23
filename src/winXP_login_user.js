import React from 'react';

class LoginScreenUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userClicked : false
        }
        this.userClickAvatar = this.userClickAvatar.bind(this);
        this.userLoggedIn = this.userLoggedIn.bind(this);

    }
    userClickAvatar = () =>{
            this.setState({
                ...this.state,
                userClicked : true,
        })
        document.querySelector('.LoginScreenUser--Container').classList.add('LoginScreenUser--Active');
        document.getElementById('LoginScreenUserAvatar').classList.add('LoginScreenUserAvatar--Active');
    }

    userLoggedIn = () =>{
        this.props.handleLogin(); //winXP_login function
    }
    
    render(){
        return (
            <div className="LoginScreenUser--Container">
                <div className="LoginScreenUser--Left">
                    <img id="LoginScreenUserAvatar" src="/images/icons/chess.webp" onClick={this.userClickAvatar}/>
                </div>
                <div className="LoginScreenUser--Middle">
                    <p className="LoginScreenUser--Middle--AccName" onClick={this.userClickAvatar}>Sanobelk</p>
                    
                    {this.state.userClicked == true && 
                    <><p className="LoginScreenUser--Middle--TypePass">Type your password</p><input className="LoginScreenUser--Middle--Input" type="password"></input></> }

                </div>
                <div className="LoginScreenUser--Right">
                    {this.state.userClicked== true && 
                    <>
                        <img src="/images/icons/login_arrow.png" id="LoginScreenUser--LoginButton" className="LoginScreenUser--Button" onClick={
                            
                           ()=>{
                            let input = document.querySelector('.LoginScreenUser--Middle--Input');
                            let login_button = document.getElementById('LoginScreenUser--LoginButton');
                            let cancel_login_button = document.getElementById('LoginScreenUser--CancelLoginButton');
                            
                            input.disabled = 'true';
                            login_button.style.display = 'none';
                            cancel_login_button.style.display = 'none';
                            this.userLoggedIn();
                           }
                        
                        } />
                        <img src="/images/icons/close_box.png" id="LoginScreenUser--CancelLoginButton" className="LoginScreenUser--Button" onClick={
                            ()=>{
                                this.setState({
                                    ...this.state,
                                    userClicked : false,
                                })
                                document.querySelector('.LoginScreenUser--Container').classList.remove('LoginScreenUser--Active');
                                document.getElementById('LoginScreenUserAvatar').classList.remove('LoginScreenUserAvatar--Active');
                            }
                        }/>
                    </>
                    }
                </div>

            
            </div>
        )
    }
        
    
}

export {LoginScreenUser}