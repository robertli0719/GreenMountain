import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import { IconButton } from "./IconButton"

interface IconButtonToolbarProp {

}

interface IconButtonToolbarState {
}

export class IconButtonToolbar extends React.Component<IconButtonToolbarProp, IconButtonToolbarState>{
    constructor() {
        super();
        this.state = { name: "hello", num: 0 };
    }

    render() {
        //Bug 开关两种状态的图片没有对齐，等美工修复
        return (
            <div className="container" >
                <div className="row">
                    <IconButton imgSrc="img/index/icon-0-off.png" overImgSrc="img/index/icon-0-on.png" to="#" />
                    <IconButton imgSrc="img/index/icon-1-off.png" overImgSrc="img/index/icon-1-on.png" to="#" />
                    <IconButton imgSrc="img/index/icon-2-off.png" overImgSrc="img/index/icon-2-on.png" to="#" />
                </div>
            </div>
        );
    }
}