import React, {Component} from "react";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {timer: "50"};
        this.started = false

               this.updateTimer = this.updateTimer.bind(this);
        this.start = this.start.bind(this)

    }

    start() {
        if (!this.started) {
        this.interval = setInterval(this.updateTimer, 500);
        this.started = true;
        }
        else {
            this.setState({timer: "50"});
            this.started = false;
            clearInterval(this.interval);
        }
    }

    updateTimer() {
        if (this.state.timer>1) {
        var minuseins = this.state.timer -1;
        this.setState({timer: minuseins});
        }
        else {
            this.setState({timer: "FERTIG"});
           }
    }

    render() {
        return(<>
            <h1>{this.state.timer}</h1>
            <button onClick={this.start} >Start</button>
        </>)

    }
}

export default Timer;