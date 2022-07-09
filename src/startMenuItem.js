import React from 'react';

class StartMenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            icon : null,
            title : null,
        }
    }

    closeMenu = this.props.action;
    action = this.props.action2;

    render(){
        return(
            <div className="startMenuItem" onClick={()=>{
                console.log(this.action);
                this.closeMenu();
                }}>
                <img className="startMenuItem--Icon" src={this.props.icon} />
                <p className="startMenuItem--Title">{this.props.title}</p>
            </div>
        )
    }
}

export {StartMenuItem}