import React, {useContext, useState} from 'react';
import {Button, Container, Dropdown, DropdownMenu, DropdownToggle, Form} from "react-bootstrap";
import {Context} from "../index";

const CreateOrder = () => {
    const [value, setValue] = useState('');
    const {order} = useContext(Context)

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (newValue === '' || Number(newValue) >= 0) {
            setValue(newValue);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === '-') {
            e.preventDefault();
        }
    };

    return (
        <Container className="mt-5" style={{width:600}}>
            <Form>
                <Dropdown>
                    <DropdownToggle>Chose type</DropdownToggle>
                    <DropdownMenu>{order.types.map(type => (
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                    ))}</DropdownMenu>
                </Dropdown>
                <Form.Control className={"mt-3"} placeholder={"Enter name of order..."}/>
                <Form.Control className={"mt-3"} placeholder={"Enter little description of order..."}/>
                <Form.Control className={"mt-3"} placeholder={"Enter full description of order..."}/>
                <Form.Control
                    value={value}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    type={'number'}
                    className={"mt-3"}
                    placeholder={"Enter order price..."}/>
                <Button variant="success" className={"mt-3"} type="submit">Submit</Button>
            </Form>
        </ Container>
    )
};

export default CreateOrder;