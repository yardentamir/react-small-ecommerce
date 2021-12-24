import React from 'react';


export default class PaymentCard extends React.Component {


  render() {
    return (
      <div class="item">
        <div class="ui small image">
          <img src="/images/wireframe/image.png" alt="" />
        </div>
        <div class="content">
          <div class="header">Arrowhead Valley Camp</div>
          <div class="meta">
            <span class="price">$1200</span>
            <span class="stay">1 Month</span>
            <div class="product-count">
              <button class="button-count no-active" disabled>-</button>
              <input type="text" readonly class="number-product" value="1" />
              <button class="button-count">+</button>
            </div>
          </div>
          <div class="description">
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}