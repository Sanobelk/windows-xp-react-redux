import React from 'react';

    class About extends React.Component{
        constructor(props){
            super(props); 
            this.state ={
                minimized : false,
                maximized : false,
            }

            this.handleDrag = this.handleDrag.bind(this);
        }

        handleDrag(event){
            
        }

        render(){

            return(
                <div className="WinXP_Desktop_Window">
                    <div className="WinXP_Desktop_Window--Topbar" onMouseDown={this.handleDrag(this)}>
                        <h2>About</h2>
                        <div className="ControlButtons">
                            <img src="./images/icons/minimize.png" onClick={this.props.minimize}></img>




                            <img src="./images/icons/maximize.png" onClick={function(){
                                let window = document.querySelector('.WinXP_Desktop_Window');
                                if(window.style.height!='100vh'){
                                    window.style.height='100vh';
                                window.style.width='100vw';
                                window.style.top='0';
                                window.style.left='0';
                                document.querySelector('.ControlButtons').style.marginRight = '5px';
                                }else if(window.style.height=='100vh'){
                                    window.style.height='500px';
                                    window.style.width='800px';
                                    window.style.top='50px';
                                    window.style.left='50px';
                                    document.querySelector('.ControlButtons').style.marginRight = '0px';
                                }
                            }
                            
                            }></img>
                            <img src="./images/icons/close.png" onClick={this.props.close}></img>
                        </div>
                    </div>
                    <div className="WinXP_Desktop_Window--Content">
                        <h3>Hello This is a test</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            )
        }
    }
    

export {About}