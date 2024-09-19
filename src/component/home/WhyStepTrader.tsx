import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const WhyStepTraders = () => {
  return (
    <Container className="why-step-traders py-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center">
            <img src="whyChooseUs.jpeg" alt="Why TANU Trader" className="img img-fluid rounded" width={400}/>
          </div>
        </Col>
        <Col md={6}>
          <h2 className='m-0 '>WHY TANU TRADERS only?</h2>
          <p>Tanu Traders Academy will provide you education of forex market which involves all things about Forex like fundamental, technical and price action , risk management, trading psychology etc.....
            Here I will teach you about how to grow your trading account by putting perfect trades.
            I took a challenge to make you a billionaire.</p>

          <ul className="list-unstyled">
            <li><i className="bi bi-person-lines-fill"></i>Highly Experienced Mentor</li>
            <li><i className="bi bi-telephone-fill"></i>24*7 Dedicated support</li>
          </ul>
          <div className="social-icons">
            <Link className='mx-1' to={"https://www.facebook.com/profile.php?id=61559945262476&mibextid=ZbWKwL"} target="_blank"><i className="bi bi-facebook"></i></Link>
            <Link className='mx-1' to={"https://t.me/TP_TRADING_94"} target="_blank"><i className="bi bi-telegram"></i></Link>
            <Link className='mx-1' to={"https://www.instagram.com/tanu_trader__/"} target="_blank"><i className="bi bi-instagram"></i></Link>
            <Link className='mx-1' to={"https://www.youtube.com/@TANU_TRADER_"} target="_blank"><i className="bi bi-youtube"></i></Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyStepTraders;
