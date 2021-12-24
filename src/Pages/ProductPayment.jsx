import React from 'react';
import PaymentCard from "../Components/PaymentCard";
import PaymentEmptyCart from "../Components/PaymentEmptyCart";
import { v4 as uuidv4 } from "uuid"; // makes random IDs

export default class ProductPayment extends React.Component {

  calcPayment = () => {
    const data = this.props.cartData;
    let sumCheck = 0;
    data.forEach(payment => {
      sumCheck += payment.price.substr(1, payment.price.length - 1) * payment.count;
    })
    return sumCheck;
  }


  render = () => {
    return (
      <div>
        {
          this.props.cartData.length > 0 ?
            <div className="ui items">
              <PaymentCard key={uuidv4()} cartData={this.props.cartData} />
              <div className="center">
                <br />
                <div className="how-much-to-pay">Cost: ${this.calcPayment()}</div>
                <br />
                <button className="button button1">Pay Now</button>
              </div>
            </div>
            : <PaymentEmptyCart />
        }
      </div>
    )
  }
}

