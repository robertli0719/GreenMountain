/*
    A Image Button

    see: IconButtonGroup, FullPageSlider
    version: 1.0 2016-11-10
    author: robert li
*/

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Link } from 'react-router';

interface IconButtonProp {
    imgSrc: string
    overImgSrc: string
    to: string
    className?: string
}

interface IconButtonState {
    imgSrc: string
}

export class IconButton extends React.Component<IconButtonProp, IconButtonState>{

    constructor(props: IconButtonProp) {
        super(props);
        console.log("constructor:");
        console.log(this.props);
        console.log(this.props.imgSrc);
        console.log(this.props.overImgSrc);
        this.state = { imgSrc: this.props.imgSrc };
    }

    mouseEnter() {
        this.state.imgSrc = this.props.overImgSrc;
        this.setState(this.state);
    }

    mouseLeave() {
        this.state.imgSrc = this.props.imgSrc;
        this.setState(this.state);
    }

    render() {
        return (
            <Link to={this.props.to}>
                <img
                    className="img-responsive"
                    src={this.state.imgSrc}
                    onMouseEnter={this.mouseEnter.bind(this)}
                    onMouseLeave={this.mouseLeave.bind(this)}
                    />
            </Link>
        );
    }
}