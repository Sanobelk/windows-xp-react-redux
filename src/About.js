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
                        <h3>About this project</h3>
                        <p>Built with React, SASS and lots of spare time, this project is a recreation of my <a href="https://sanobelk.github.io/">Javascript Windows XP Desktop Experience.</a> My Javascript rendition helped me solidify DOM manipulation, CSS, and my Javascript skills. This project was made as a refresher for CSS, to test my desgin to implementation skills, and learn more about React. It was purposely built with class based components because I was not familiar with them. I think even though it's an outdated way to build React applications (so the internet says), it is still useful to know.</p> 

                        <p>I would like to expand on this project further in the future. Some plans I have for it include moveable windows, user accounts, a "web browser", files creation, and interactive applications on the desktop/start menu.</p> 

                        <p>The code for this project is visible on <a href="">Github</a>.</p>

                        <p>Thanks for reading!</p>
                    </div>
                </div>
            )
        }
    }
    

export {About}