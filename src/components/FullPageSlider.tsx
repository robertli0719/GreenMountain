/*
    Using several icon-buttons on the bottom of the page to change backgroud images.
    Suggest using it for index page. 

    version: 1.0 2016-11-10
    author: robert li
*/
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import { IconButtonToolbar } from "./IconButtonToolbar"

interface FullPageSliderState {
    num: number
    name: string
}

export class FullPageSlider extends React.Component<{}, FullPageSliderState>{
    constructor() {
        super();
        this.state = { name: "hello", num: 0 };
    }

    render() {
        return (
            <div className="container">
                <IconButtonToolbar />
            </div>
        );
    }
}



