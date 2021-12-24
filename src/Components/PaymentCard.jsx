import React from 'react';
import { v4 as uuidv4 } from "uuid"; // makes random IDs


export default class PaymentCard extends React.Component {


  render() {
    return (
      <>
        {this.props.cartData.map((product) => {
          return (<span key={uuidv4()} >
            <div className="item">
              <div className="ui small image">
                <img src={product.img} alt="" />
              </div>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta">
                  <span className="price">{product.price}</span>
                  <div className="product-count">
                    <button className="button-count no-active" disabled>-</button>
                    <input type="text" readOnly className="number-product" defaultValue={product.count} />
                    <button className="button-count">+</button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <hr />
          </span>)
        })}
      </>
    )
  }
}