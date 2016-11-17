import * as React from "react";
import * as ReactDOM from "react-dom";

let template = (
    <div className="container">
        <h1>About us</h1>
    </div>
);

export class AboutPage extends React.Component<{}, {}>{

    num: number

    constructor() {
        super();
        console.log("hello, world~!");
        this.num = 0;
    }

    render() {
        this.num++;
        return (
            <div className="container">
                <h1>About us</h1>
                <p>{this.num}</p>
            </div>
        );
    }
}
