import React from 'react'
import styled from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap';

const Styles = styled.div`
    .navbar {
        background-color: #222
    }
    .navbar-brand, .navbar-nav .nav-item {
        color: #bbb;

        &:hover {
            color: white
        }
    }
`


export const Navigation = () => {
    return (
        <Styles>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Styles>
    )
}
