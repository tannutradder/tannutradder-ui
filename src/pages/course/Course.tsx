import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from '../../component/course/CourseCard';
import { courses } from '../../Utility/ConstantData/DummyData';

function Course() {
    return (
        <>
            {/* <Banner imgPath={"./course_banner.jpeg"}></Banner>
            <div className="text-center mt-5">
                <h3>Our Courses</h3>
                <h6>Achieve Your Trading Goals with Our Structured Learning Path</h6>
            </div> */}
            <div id='course'>
                <div className="text-center">
                    <h3 style={{ color: "#ed143d" }}>Our Courses</h3>
                </div>
                <Container className="featured-courses">
                    <Row>
                        {courses?.map((course, index) => (
                            <Col className='mt-2' md={4} key={index}>
                                <CourseCard course={course} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Course;
