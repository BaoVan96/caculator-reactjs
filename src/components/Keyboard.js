import React from "react";
import Button from "./Button";
import "./Keyboard.css";

class Keyboard extends React.Component {
    render() {
        return (
            <div className="keyboard">
                <div>
                    <Button name="AC" />
                    <Button name="+/-" />
                    <Button name="%" />
                    <Button name="÷" subClass="orange" />
                </div>
                <div>
                    <Button name="9" />
                    <Button name="8" />
                    <Button name="7" />
                    <Button name="x" subClass="orange" />
                </div>
                <div>
                    <Button name="6" />
                    <Button name="5" />
                    <Button name="4" />
                    <Button name="-" subClass="orange" />
                </div>
                <div>
                    <Button name="3" />
                    <Button name="2" />
                    <Button name="1" />
                    <Button name="+" subClass="orange" />
                </div>
                <div>
                    <Button name="0" subClass="wide" />
                    <Button name="." />
                    <Button name="=" />
                </div>
            </div>
        )
    }
}

export default Keyboard;