import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";

interface IndexStateModel {
    num: number
    name: string
}

export class Index extends React.Component<{}, IndexStateModel>{

    constructor() {
        super();
        this.state = { name: "hello", num: 0 };
    }

    mouseEnter() {
        console.log("mouseEnter: " + this.state);
        this.state.num++;
        this.setState(this.state);
    }

    mouseLeave() {
        console.log("mouseLeave: " + this.state);
        this.state.num--;
        this.setState(this.state);
    }

    render() {
        this.state;
        console.log("render");
        return (
            <div className="container">
                <ButtonToolbar>
                    <Button>hello</Button>
                    <Button>hello</Button>
                    <Button>hello</Button>
                    <Button bsStyle="success">hello</Button>
                </ButtonToolbar>
                <p className="hello" onMouseEnter={this.mouseEnter.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} >
                    {this.state.name}: {this.state.num}
                </p>
            </div>
        );
    }
}
