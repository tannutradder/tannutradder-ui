import { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';

function BookDetailComp(props: any) {
    const [quantity, setQuantity] = useState<number>(1);
    const { courseDetail, course } = props;
    // const course = {
    //     id: 1,
    //     title: "Advanced Forex Trading Strategies",
    //     description: "Master the art of Forex trading with our advanced strategies. Learn how to read the market, manage risks, and make informed decisions.",
    //     price: 99.99,
    //     imageUrl: "https://via.placeholder.com/300",
    // };

    const handleAddToCart = () => {
        alert(`Added ${quantity} x ${course.title} to cart.`);
    };
    return (<>
        <Container className="mt-2">
            <div className="card">
                <div className="card-body">
                <div className='fs-4 text-center text-info mt-2'>
                        <strong>Please contact for purchase books.</strong>
                    </div>
                    <p className='text-center'>Purchase books go to our app
                        <a href={"https://gyricu.on-app.in/app/home?orgCode=gyricu&referrer=utm_source=copy-link&utm_medium=tutor-app-referral"} target='_blank'>click here</a>
                    </p>
                    <p className='text-center text-secondary'> We are offering this books only for education, there will be no risk or responsibility on our.</p>
                    <p className='text-center'>"There is no refund policy"</p>
                </div>
            </div>
        </Container>
    </>);
}

export default BookDetailComp;
