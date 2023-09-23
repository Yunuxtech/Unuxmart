import React from "react";
import "../styles/checkout.css";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";

const Checkout = () => {

  const totalQty = useSelector((state) => state.cart.totalQuality)
  const totalAmount = useSelector((state) => state.cart.totatAmount)
  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="number" placeholder="Phone" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Street Address" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty: <span>{totalQty} items</span>
                </h6>
                <h6>
                  Subtotal: <span>N{totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br /> Free shipping
                  </span>
                  <span>N0</span>
                </h6>
                <h4>
                  Total Cost: <span>N{totalAmount}</span>
                </h4>
                <button className="buy_btn auth_btn w-100">Place An Order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
