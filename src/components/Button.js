import React from "react";
import "./Button.css";

class Button extends React.Component {
    render() {
        return (
            <div className={`button + ${this.props.subClass}`}>
                <button>{this.props.name}</button>
            </div>
        )
    }
}

export default Button;