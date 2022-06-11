import React from 'react';

class LoginScreenUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userClicked : false
        }
        this.userClickAvatar = this.userClickAvatar.bind(this);

    }
    userClickAvatar = () =>{
            this.setState({
                ...this.state,
                userClicked : true,
        })
        console.log('set to True');
        document.querySelector('.LoginScreenUser--Container').classList.add('LoginScreenUser--Active');
        document.getElementById('LoginScreenUserAvatar').classList.add('LoginScreenUserAvatar--Active');
    }
    
    render(){
        
        return (
            <div className="LoginScreenUser--Container">
                <div className="LoginScreenUser--Left">
                    <img id="LoginScreenUserAvatar" src="/images/icons/chess.webp" onClick={this.userClickAvatar}/>
                </div>
                <div className="LoginScreenUser--Middle">
                    <p className="LoginScreenUser--Middle--AccName">Admin</p>
                    
                    {this.state.userClicked == true && 
                    <><p className="LoginScreenUser--Middle--TypePass">Type your password</p><input className="LoginScreenUser--Middle--Input"></input></> }

                </div>
                <div className="LoginScreenUser--Right">
                    {this.state.userClicked== true && 
                    <>
                        <img src="/images/icons/login_arrow.png" className="LoginScreenUser--Button" onClick={
                            
                           ()=>{
                               this.props.userLoggedIn();
                           }
                        
                        } />
                        <img src="/images/icons/close_box.png" className="LoginScreenUser--Button" onClick={
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