import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
      <Row>
        <Col lg="4" className="mb-4" md="6">
          <div className="logo">
            <div>
              <h1 className="text-white">UnuxMart</h1>
            </div>
          </div>
          <p className="footer_text mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ullam nulla saepe esse distinctio laudantium amet. Voluptate
            laboriosam accusamus deserunt.
          </p>
        </Col>

        <Col lg="3" md="3" className="mb-4">
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Top Catetories</h4>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Mobile Phones</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Modern Sofa</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Arm Chair</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="2" md="3" className="mb-4"> 
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Usesful Links</h4>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/shop">Shop</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/cart">Cart</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/login">Login</Link>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0">
                <Link to="#">Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="3" md="4">
          <div className="footer_quick-links">
            <h4 className="quick_links-title">Contact</h4>
            <ListGroup className="footer_contact">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-map-pin-line"></i>
                </span>
                <p>No.29 Rijiyar Zaki, Kano Nigeria</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-phone-line"></i>
                </span>
                <p>+234 90 3324 8408</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span>
                  <i class="ri-mail-line"></i>
                </span>
                <p>yunusisah123@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg="12">
          <p className="footer_copyright">
            copyright{year} developed by Yunux. All rights reserved.
          </p>
        </Col>
      </Row>
      </Container>
    </footer>
  );
};

export default Footer;
