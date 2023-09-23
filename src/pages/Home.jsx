import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import HeroImg from "../assets/images/hero-img.png";
import Services from "../services/Services";
import { Link } from "react-router-dom";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";
import countImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";
const Home = () => {
  const [trebdingProduct, settrebdingProduct] = useState([]);
  const [bestSalesProduct, setbestSalesProduct] = useState([]);
  const [mobileProduct, setMobileProduct] = useState([]);
  const [wirelessProduct, setWirelessProduct] = useState([]);
  const [popularProduct, setPopularProduct] = useState([]);
  // console.log(products);
  const year = new Date().getFullYear();
  useEffect(() => {
    // fitering Trending Products
    const filterTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    // filtering Best Sales Products
    const filterBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    // filtering Mobile Products and Wireless Products
    const filterMobileProducts = products.filter(
      (item) => item.category === "mobile" || item.category === "wireless"
    );
    // filtering Wireless Products
    const filterWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filterPopularProduct = products.filter(
      (item) => item.category === "watch"
    );

    settrebdingProduct(filterTrendingProducts);
    setbestSalesProduct(filterBestSalesProducts);
    setMobileProduct(filterMobileProducts);
    setWirelessProduct(filterWirelessProducts);
    setPopularProduct(filterPopularProduct);
    // console.log(data);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your More Minimalistic & Modern </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  dolorem totam corrupti molestias neque a autem, soluta placeat
                  cumque debitis?
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={HeroImg} alt="" srcset="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
          </Row>
          <ProductList data={trebdingProduct} />
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
          </Row>
          <ProductList data={bestSalesProduct} />
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top_content">
                <h4 className="text-white fs-6 mb-2">Limiteed Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={countImg} alt="" srcset="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title mb-5">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProduct}/>
            {/* <ProductList data={wirelessProduct}/> */}
          </Row>
        </Container>

      </section>
      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title  mb-5">Popular In Category</h2>
            </Col>
            <ProductList data={popularProduct}/>
          </Row>
        </Container>

      </section>
    </Helmet>
  );
};

export default Home;
