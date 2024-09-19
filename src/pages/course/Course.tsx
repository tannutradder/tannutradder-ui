import { Container, Row, Col, Button } from 'react-bootstrap';
import CourseCard from '../../component/course/CourseCard';
import { courses } from '../../Utility/ConstantData/DummyData';
import Banner from '../../component/banner/Banner';

function Course() {
    return (
        <>
            <Banner imgPath={"./course_banner.jpeg"}></Banner>
            <div className="text-center mt-5">
                <h3>Our Courses</h3>
                <h6>Achieve Your Trading Goals with Our Structured Learning Path</h6>
            </div>
            <Container className="featured-courses">
                <Row>
                    {courses?.map((course, index) => (
                        <Col md={4} key={index}>
                            <CourseCard course={course} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Course;
