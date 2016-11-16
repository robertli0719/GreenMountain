/*
    Using several icon-buttons on the bottom of the page to change backgroud images.
    Suggest using it for index page. 

    version: 1.01 2016-11-15
    author: robert li
*/
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Link } from 'react-router';

interface SliderButton {
    imgSrc: string
    overImgSrc: string
    bgImgSrc: string
    to: string
    title: string
}

interface FullPageSliderState {
    currentId: number
    fixed: boolean
}

export class FullPageSlider extends React.Component<{}, FullPageSliderState>{

    btnItemArray: SliderButton[];
    bannerCssArray: string[] = [
        "banner animated bounceIn",
        "banner animated swing",
        "banner animated jello"
    ];

    constructor() {
        super();
        this.btnItemArray = [
            { imgSrc: "img/index/icon-0-off.png", overImgSrc: "img/index/icon-0-on.png", bgImgSrc: "img/index/pic_0.jpg", to: "#", title: "Demo 1" },
            { imgSrc: "img/index/icon-1-off.png", overImgSrc: "img/index/icon-1-on.png", bgImgSrc: "img/index/pic_1.jpg", to: "#", title: "Demo 2" },
            { imgSrc: "img/index/icon-2-off.png", overImgSrc: "img/index/icon-2-on.png", bgImgSrc: "img/index/pic_2.jpg", to: "#", title: "Demo 3" }
        ];
        this.state = {
            currentId: 0,
            fixed: false
        };

        setInterval(() => {
            if (this.state.fixed) {
                return;
            }
            let id = this.state.currentId;
            this.state.currentId = (id + 1) % this.btnItemArray.length;
            this.setState(this.state);
        }, 6000);
    }

    render() {
        return (
            <div className="full_page_slider">
                <div className="big_picture" style={{ backgroundImage: this.getCurrentBgImgSrc() }}></div>
                <div className="content_center">
                    <h1 className={this.bannerCssArray[this.state.currentId]}>
                        {this.getCurrentTitle(this.state.currentId)}
                    </h1>
                </div>
                <div className="icon_button_toolbar content_bottom" >
                    {
                        this.btnItemArray.map((item, index) => {
                            return (
                                <div className={this.getItemClass(index)}>
                                    <Link to={item.to}>
                                        <img
                                            className="img-responsive"
                                            src={this.getCurrentIconButtonSrc(index)}
                                            onMouseEnter={this.mouseEnter.bind(this, index)}
                                            onMouseLeave={this.mouseLeave.bind(this, index)}
                                            />
                                    </Link>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }

    mouseEnter(index: number) {
        this.state.currentId = index;
        this.state.fixed = true;
        this.setState(this.state);
    }

    mouseLeave(index: number) {
        this.state.currentId = index;
        this.state.fixed = false;
        this.setState(this.state);
    }

    private getCurrentBgImgSrc(): string {
        let id = this.state.currentId;
        let src = this.btnItemArray[id].bgImgSrc;
        return `url(${src})`;
    }

    private getCurrentIconButtonSrc(index: number): string {
        let id = this.state.currentId;
        let btn = this.btnItemArray[index];
        if (index === id) {
            return btn.overImgSrc;
        }
        return btn.imgSrc;
    }

    private getCurrentTitle(index: number) {
        let id = this.state.currentId;
        return this.btnItemArray[id].title;
    }

    private getItemClass(index: number): string {
        let id = this.state.currentId;
        if (index === id) {
            return "item active";
        }
        return "item";
    }
}



