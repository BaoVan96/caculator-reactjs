import React from "react";
import Button from "./Button";
import "./Keyboard.css";

class Keyboard extends React.Component {
    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };
    render() {
        return (
            <div className="keyboard">
                <div>
                    <Button name="AC" clickHandler={this.handleClick}/>
                    <Button name="+/-" clickHandler={this.handleClick}/>
                    <Button name="%" clickHandler={this.handleClick}/>
                    <Button name="÷" subClass="orange" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button name="9" clickHandler={this.handleClick}/>
                    <Button name="8" clickHandler={this.handleClick}/>
                    <Button name="7" clickHandler={this.handleClick}/>
                    <Button name="x" subClass="orange" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button name="6" clickHandler={this.handleClick}/>
                    <Button name="5" clickHandler={this.handleClick}/>
                    <Button name="4" clickHandler={this.handleClick}/>
                    <Button name="-" subClass="orange" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button name="3" clickHandler={this.handleClick}/>
                    <Button name="2" clickHandler={this.handleClick}/>
                    <Button name="1" clickHandler={this.handleClick}/>
                    <Button name="+" subClass="orange" clickHandler={this.handleClick}/>
                </div>
                <div>
                    <Button name="0" subClass="wide" clickHandler={this.handleClick}/>
                    <Button name="." clickHandler={this.handleClick}/>
                    <Button name="=" clickHandler={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default Keyboard;