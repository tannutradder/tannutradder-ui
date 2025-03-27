import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { books } from '../../Utility/ConstantData/DummyData';
import BookCard from '../books/BookCard';

const FeaturedBooks = () => {
  return (
    <Container className="featured-courses">
      <Row className="justify-content-between align-items-center mb-4">
        <Col>
          <h2>Featured Books</h2>
        </Col>
        <Col className="text-end">
          <Button variant="primary">Browse Books</Button>
        </Col>
      </Row>
      <div className='row g-3'>
        {books?.map((book, index) => (
          <Col md={4} key={index}>
            <BookCard book={book} />
          </Col>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedBooks;
