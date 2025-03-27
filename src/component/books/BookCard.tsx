import { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import CourseDetailComp from '../course/CourseDetailComp';
import BookDetailComp from './BookDetailComp';

// const CourseCard = ({ image, title, author, oldPrice, newPrice }: any) => {
const BookCard = (props: any) => {
    const { book } = props;

    const [show, setShow] = useState<boolean>(false);
    const [courseDetail, setCourseDetail] = useState<any>(null);
    const handleClose = () => {
        setShow(false);

    }
    const basicToAdvanceDetail = ["Introduction", "Basic of forex", "Best trading platform", "Candle sticks", "Market structure", "Price action / chart pattern", "Support and resistance", "Strategies", "Risk Management", "Fundamental", "Psychology"];

    const candlesticksDetail = ["All types of Candlesticks patterns "];
    const riskManagementDetail = ["Best way to manage your risk with proper calculations"];

    const handleShow = (title: string) => {
        // if (title === "Basic to Advance course") {
        //     setCourseDetail(basicToAdvanceDetail);
        // } else if (title === "Magic Candlesticks") {
        //     setCourseDetail(candlesticksDetail);
        // }
        // else if (title === "Risk Management") {
        //     setCourseDetail(riskManagementDetail);
        // }
        setShow(true);
    }

    return (<>
        <Card className="course-card h-100">
            <div className=''>
                <img className='img img-fluid' src={book.image} style={{height:"210px", width:"100%"}}/>
            </div>
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text></Card.Text>
                <div className="price-section">
                    <span className="old-price">{book.oldPrice}</span>
                    <span className="new-price">{book.newPrice}</span>
                </div>
                <Button variant="primary" onClick={() => handleShow(book.title)}>More Detail...</Button>
            </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose} size='xl' style={{ height: '600px' }}>
            <Modal.Header closeButton>
                <Modal.Title>Buy Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BookDetailComp courseDetail={courseDetail} book={book} />
            </Modal.Body>
        </Modal>
    </>
    );
};

export default BookCard;
