import { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';

function CourseDetailComp(props: any) {
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
        {/* <div className="card">
            <div className="card-body">
                <ul>
                    {props?.courseDetail.map((cd: string, index: number) => {
                        return <li key={index}>{cd}</li>
                    })}
                </ul>
            </div>
        </div> */}
        <Container className="mt-5">
            <Row>
                <Col md={12} xl={6}>
                    <Card>
                        <Card.Img variant="top" src={course.image} alt={course.title} />
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{course.title}</Card.Title>
                            <Card.Text>{course.description}</Card.Text>
                            <Card.Text><strong>Price:</strong>
                                <span className='text-primary'> {course.newPrice}/-</span>
                            </Card.Text>
                            <Card.Text>
                                {courseDetail.map((cd: string, index: number) => {
                                    return <li key={index}>{cd}</li>
                                })}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12}>
                    <div className='fs-4 text-center text-info mt-2'>
                        <strong>Please contact for purchase course.</strong>
                    </div>
                    <p className='text-center'>Purchase course go to our app
                        <a href={"https://gyricu.on-app.in/app/home?orgCode=gyricu&referrer=utm_source=copy-link&utm_medium=tutor-app-referral"} target='_blank'>click here</a>
                    </p>
                    <p className='text-center text-secondary'> We are offering this course only for education, there will be no risk or responsibility on our.</p>
                    <p className='text-center'>"There is no refund policy"</p>
                </Col>
            </Row>
        </Container>
    </>);
}

export default CourseDetailComp;
