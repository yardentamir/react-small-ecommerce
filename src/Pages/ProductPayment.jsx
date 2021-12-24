import React from 'react';
import PaymentCard from "../Components/PaymentCard";
import { v4 as uuidv4 } from "uuid"; // makes random IDs

export default class ProductPayment extends React.Component {


  render = () => {
    return (
      <div>
        {
          this.props.cartData.length > 0 ?
            <div className="ui items">
              <PaymentCard key={uuidv4()} cartData={this.props.cartData} />
            </div>
            : <span>nothing</span>
        }
      </div>
    )
  }
}

