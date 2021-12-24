import React, { Component } from 'react';

import '../styles/home_page.css';
import 'antd/dist/antd.less';
import { Row, Col } from 'antd';


class HomePage extends React.Component {
    render() { 
        return <div>
           <div>
               <h1 className='inline' id='logo'>Myntra Logo</h1>         
               <input className='inline' id='input' placeholder='Search'></input>
               <h1 className='inline' id='bag'>Bag</h1>
               {/* <i  className='inline' id='bag' class="fas fa-shopping-bag"></i> */}
           </div>

           <div>
               <img id='banner' src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/10/043ee3ed-e3ff-4afc-812f-e2e9702e11711639149390839-K_Winterwear_Dk.jpg'></img>
           </div>


      <div>
               <h1 id='deals_heading'>DEALS OF THE DAY</h1>
           </div>

      <div>
               {this.props.homePage.deals.map((c)=>(
                   <img id='deals_pics' src={c}></img>
               ))}
           </div>




           <div>
               <h1 id='biggestdeals_heading'>BIGGEST DEALS ON TOP BRANDS</h1>
           </div>

      <div>
               {this.props.homePage.topdeals.map((c)=>(
                   <img id='deals_pics' src={c}></img>
               ))}
           </div>

     

        </div>;
    }
}
 
export default HomePage;

