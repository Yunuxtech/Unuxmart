import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import tdImg from "../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totatAmount);
  console.log(totalAmount);
  return ( 
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">Cart is Empty</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Imgae</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">Subtotal
                <span className="fs-4 fw-bold">N{totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-3">Taxes and shipping will be calculated in checkout</p>
              <div>
               
                <button className="buy_btn w-100">
                  <Link to="/checkout">Checkout</Link>
                </button>

                <button className="buy_btn w-100  mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="404" srcset="" />
      </td>
      <td>{item.productName}</td>
      <td>N{item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        {" "}
        <motion.i
          onClick={deleteProduct}
          whileTap={{ scale: 1.2 }}
          class="ri-delete-bin-line"
        ></motion.i>
      </td>
    </tr>
  );
};
export default Cart;
