import React, { Component } from 'react';
import All_products from './components/all_products';
import Checkout from './components/checkout';

import HomePage from './components/home_page';
import ProductDetail from './components/product_detail';
import getAllProducts from './json/all_products';
import getHomePage from './json/home_page_data';
import getproductdetail from './json/product_detail';

class App extends React.Component {
  // state={homepage : {banner: [], deals: [], topdeals: []}}
  state = { homepage : getHomePage() , allproducts : getAllProducts() , productdetail : getproductdetail()}
  render() { 
    return <div>
      {/* <HomePage homePage={this.state.homepage}></HomePage> */}
      {/* <All_products All_Products={this.state.allproducts}></All_products> */}
      {/* <ProductDetail product_Detail={this.state.productdetail}></ProductDetail> */}
      <Checkout></Checkout>
    </div>;
  }
}
 
export default App;
