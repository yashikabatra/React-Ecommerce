import React, { Component } from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import "../styles/product_detail.css";

class ProductDetail extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={12} id='col1'>
            <img
              src={this.props.product_Detail.picture}
              id='product_detail_pic'
            ></img>
          </Col>

          <Col span={12}>
              <div id="col-2-pd">
            <h1 id='product_detail_brand'>{this.props.product_Detail.brand}</h1>
            <p id='product_detail_label'>{this.props.product_Detail.label}</p>
            <h1 id='product_detail_price'>{this.props.product_Detail.price}</h1>
            <p id='product_detail_tax'> inclusive of all taxes</p>
            <div>
              <h1 id="selectsize">SELECT SIZE</h1>

              {this.props.product_Detail.size.map((c) => (
                <button className='size_button'> {c}</button>
              ))}
            </div>

<div>
    <button className="btn-pd" id="addtocart-btn">ADD TO CART</button>
    <button className="btn-pd" id="wishlist-btn">WISHLIST</button>
</div>
</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductDetail;
