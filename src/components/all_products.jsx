import React, { Component } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../styles/all_products.css";
import { Checkbox } from "antd";
import { Card } from "antd";
const { Meta } = Card;

class All_products extends React.Component {
  render() {
    return (
      <div>
        {/* filter */}
        <Row>
          <Col span={4} id="col-1-allproducts">
<div id="filter_allproducts"> 
            <h1>FILTERS</h1>
            <hr></hr>

            <div>
              <Checkbox>Boy</Checkbox> <br></br>
              <Checkbox>Girl</Checkbox>
            </div>

            <hr></hr>
            <h1>CATEGORIES</h1>
            <div>
              {this.props.All_Products.filters.categories.map((c) => (
                <div>
                  <Checkbox>{c}</Checkbox>
                  <br></br>
                </div>
              ))}
            </div>

            <hr></hr>

            <h1>BRANDS</h1>
            <div>
              {this.props.All_Products.filters.brands.map((c) => (
                <div>
                  <Checkbox>{c}</Checkbox>
                  <br></br>
                </div>
              ))}
            </div>

            <hr></hr>
            <h1>PRICE</h1>
            <div>
              {this.props.All_Products.filters.price.map((c) => (
                <div>
                  <Checkbox>{c}</Checkbox>
                  <br></br>
                </div>
              ))}
            </div>

            <hr></hr>
            <h1>COLOR</h1>
            <div>
              {this.props.All_Products.filters.color.map((c) => (
                <div>
                  <Checkbox>{c}</Checkbox>
                  <br></br>
                </div>
              ))}
            </div>
            </div>
          </Col>

          <Col span={20}>
            <div>
              {this.props.All_Products.allproducts_data.map((c) => (
                <Card className="card_inline"
                  hoverable
                  style={{ width : 240 }}
                  cover={<img alt='example' src={c.photo} />}
                >
                  <Meta title={c.brand} description={c.title} />

                  <h2 id='price_allproduct'>{c.price}</h2>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default All_products;
