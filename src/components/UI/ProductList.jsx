import React from "react";
import ProductCard from "./ProductCard";
import { Col, Row } from "reactstrap";

const ProductList = ({data}) => {
  return (
    <Row>
        {
            data?.map((item, index) =>(
                <ProductCard item={item} key={index}/>

            ))
        }
    
      
    </Row>
  );
};

export default ProductList;
