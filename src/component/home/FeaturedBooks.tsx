import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { books } from '../../Utility/ConstantData/DummyData';
import BookCard from '../books/BookCard';

const FeaturedBooks = () => {
  return (
    <Container>
      <Row className='mb-4'>
        <h2 style={{ color: '#ed143d' }}>Featured Books</h2>
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
