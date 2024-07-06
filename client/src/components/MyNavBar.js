import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {CREATEORDER_ROUTE, LOGIN_ROTE, MENU_ROUTE, ORDERS_ROUTE} from "../utils/const";

const MyNavBar = observer(() => {
    const history = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav>
                    <Button
                        style={{marginRight: 20}}
                        variant="outline-light"
                        onClick={() => history(MENU_ROUTE)}
                    >
                        Menu
                    </Button>
                    <Button
                        style={{marginRight: 20}}
                        variant="outline-light"
                        onClick={() => history(LOGIN_ROTE)}
                    >
                        Login
                    </Button>
                    <Button
                        style={{marginRight: 20}}
                        variant="outline-light"
                        onClick={() => history(CREATEORDER_ROUTE)}
                    >
                        Create order
                    </Button>
                    <Button
                        style={{marginRight: 20}}
                        variant="outline-light"
                        onClick={() => history(ORDERS_ROUTE)}
                    >
                        Orders
                    </Button>
                </Nav>
            </Container>
        </Navbar>
    );
});

export default MyNavBar;
