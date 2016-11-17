import * as React from "react";
import * as ReactDOM from "react-dom";

let template = (
    <div className="container">
        <h1>About us</h1>
    </div>
);

export class AppPage extends React.Component<{}, {}>{

    constructor() {
        super();
        console.log("hello, App~!");
    }

    render() {
        return (
            <div className="app_page">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <img className="img-responsive" src="img/production/production-1.png" />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 text-center top_space_40">
                                <h1>Production Demo 1</h1>
                                <h2>Header 1</h2>
                                <p>Description text description text description, and text description text description text description text description text. </p>
                                <h2>Header 2</h2>
                                <p>Description text description text description, and text description text description text description text description text. </p>
                                <h2>Header 3</h2>
                                <p>Description text description text description, and text description text description text description text description text. </p>
                                <a href="#"> >>click to download</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bgimg_banner" style={{ backgroundImage: "url(img/ipad-dude-dark1.jpg)" }}>
                    <div className="container">
                        <h1 className="text-center">Big Title, Big Title</h1>
                        <p className="top_space_40">Description text description text description, and text description text description text description text description text. </p>
                        <p>Description text description text description, and description text description text. </p>
                    </div>
                </div>
                <div className="container-fluid" style={{ backgroundColor: "#F2F2F2" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 text-center top_space_40">
                                <h1>Production Demo 2</h1>
                                <h2>Header 1</h2>
                                <p>Description text description text description, and text description text description text description text description text. </p>
                                <h2>Header 2</h2>
                                <p>Description text description text description, and text description text description text description text description text. </p>
                                <h2>Header 3</h2>
                                <p>Description text description text description, and text description text description text description text description text. </p>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <img className="img-responsive" src="img/production/production-2.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-2">
                                <img className="img-responsive" src="img/production/production-3.png" />
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-2">
                                <img className="img-responsive" src="img/production/production-4.png" />
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-8 text-center top_space_40">
                                <h1>Production Demo 3</h1>
                                <h2>Keep 1</h2>
                                <p>Description text description text description, and text description text description text description text description text. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
