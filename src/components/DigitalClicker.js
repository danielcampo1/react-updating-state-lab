// Code DigitalClicker Component Here

import React, { Component } from "react";

class DigitalClicker extends React.Component {
    constructor() {
        super()
    
    this.state = {
        timesClicked: 0
    }
}

timesClicked = () => {
    this.setState({
        timesClicked: this.state.timesClicked + 1
    })
}
render() {

    return(
        <div>
            <button onClick = {this.timesClicked}>
            {this.state.timesClicked}

            </button>
        </div>
        )
    }
}

export default DigitalClicker;