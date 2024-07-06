import React, {useContext} from 'react';
import {Row} from "react-bootstrap";
import {Context} from "../index";
import OrderCard from "../components/OrderCard";

const Orders = () => {
    const {order} = useContext(Context)
    return (
            <Row>
                {order.orders.map(order =>
                    <OrderCard key={order.id} order={order}/>
                )}
            </Row>
    );
};

export default Orders;