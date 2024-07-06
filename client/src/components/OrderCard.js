import React from 'react';
import {Card, Col} from "react-bootstrap";

const OrderCard = ({order}) => {
    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <div>
                    {order.name}
                </div>
                <div>
                    {order.littleDisc}
                </div>
            </Card>
        </Col>
    );
};

export default OrderCard;