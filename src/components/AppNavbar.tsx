import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button, ButtonToolbar, Navbar, Nav, NavItem, NavbarProps } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import './base.scss';

//There is a bug in @types/react-bootstrap": "0.0.35",
//so that we can't add collapseOnSelect on Navbar

let template = (
    <Navbar className="navbar" inverse /*collapseOnSelect*/>
        <Navbar.Header>
            <Navbar.Brand>
                <a className="hello" href="#">Green Mountain</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/index">
                    <NavItem eventKey={1}>Index</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem eventKey={2}>About</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="#">Link</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export class AppNavbar extends React.Component<{}, {}>{
    render() {
        return template;
    }
}
