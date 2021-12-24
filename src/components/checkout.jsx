import React, { Component } from 'react';
import { Row, Col } from 'antd';
import "../styles/checkout.css";



class Checkout extends React.Component {
    render() { 
        return <div>
            <Row>
      <Col span={15}>
          <div id='col1'>
          <div className='checkout_product'>
          <img id='checkout_img' src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16057646/2021/11/25/d07c8f4b-af20-4173-ba46-066087c8957f1637832403791-United-Colors-of-Benetton-Unisex-Kids-Pink-Grey-Melange-Reve-1.jpg"></img>
          </div>
          <div id='product_details_checkout' className='checkout_product'>
          <h1>United Colors of Benetton </h1>
          <p>Kids Pink & Grey Melange Reversible Padded Jacket</p>
          <select>
              <option>Size</option>
              <option>Xs</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>

          </select>

          <select id='qty'> 
              <option>Quantity</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>

          </select>

          <h1 id='price_checkout'>Rs 1754</h1>
          </div>
          </div>
      </Col>
      <Col span={9}>col-12</Col>
    </Row>
        </div>;
    }
}
 
export default Checkout;
