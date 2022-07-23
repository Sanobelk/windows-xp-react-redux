import React from "react";

class Modal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="modal-window">
                <p>{this.props.message}</p>
                <button onClick={()=>{
                    window.open('https://sanobelk.com/resume.html', '_blank');
                    this.props.close();
                }}>Yes</button>
                <button onClick={this.props.close}>No</button>
            </div>
        )
    }
}

export {Modal}