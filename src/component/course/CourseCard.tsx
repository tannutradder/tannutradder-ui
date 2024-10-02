import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import CourseDetailComp from './CourseDetailComp';

// const CourseCard = ({ image, title, author, oldPrice, newPrice }: any) => {
const CourseCard = (props: any) => {
    const { course } = props;

    const [show, setShow] = useState<boolean>(false);
    const [courseDetail, setCourseDetail] = useState<any>(null);
    const handleClose = () => {
        setShow(false);

    }
    const basicToAdvanceDetail = ["Introduction", "Basic of forex", "Best trading platform", "Candle sticks", "Market structure", "Price action / chart pattern", "Support and resistance", "Strategies", "Risk Management", "Fundamental", "Psychology"];

    const candlesticksDetail = ["All types of Candlesticks patterns "];
    const riskManagementDetail = ["Best way to manage your risk with proper calculations"];

    const handleShow = (title: string) => {
        if (title === "Basic to Advance course") {
            setCourseDetail(basicToAdvanceDetail);
        } else if (title === "Magic Candlesticks") {
            setCourseDetail(candlesticksDetail);
        }
        else if (title === "Risk Management") {
            setCourseDetail(riskManagementDetail);
        }
        setShow(true);
    }

    return (<>
        <Card className="course-card">
            <div className=''>
                <img className='img img-fluid' src={course.image} />
            </div>
            <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text></Card.Text>
                <div className="price-section">
                    <span className="old-price">{course.oldPrice}</span>
                    <span className="new-price">{course.newPrice}</span>
                </div>
                <Button variant="primary" onClick={() => handleShow(course.title)}>More Detail...</Button>
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} size='xl' style={{ height: '600px' }}>
            <Modal.Header closeButton>
                <Modal.Title>Course Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CourseDetailComp courseDetail={courseDetail} course={course} />
            </Modal.Body>
        </Modal>
    </>
    );
};

export default CourseCard;
