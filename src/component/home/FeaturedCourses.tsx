import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CourseCard from '../course/CourseCard';
import { courses } from '../../Utility/ConstantData/DummyData';

const FeaturedCourses = () => {
  return (
    <Container className="featured-courses">
      <Row className="justify-content-between align-items-center mb-4">
        <Col>
          <h2>Featured Courses</h2>
        </Col>
        <Col className="text-end">
          <Button variant="primary">Browse Courses</Button>
        </Col>
      </Row>
      <Row>
        {courses?.map((course, index) => (
          <Col md={4} key={index}>
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
      {JSON.stringify(courses)}

    </Container>
  );
};

export default FeaturedCourses;
