import React from 'react';


export default class PaymentEmptyCart extends React.Component {

  render = () => {
    return (
      <ul className="flash_msg">
        <li className="msg s_info">
          <span><i className="fas fa-info"></i></span>
          <div className="text">
            <div className="title">There is no products in the Cart</div>
            <div className="content">Go shopping!</div>
          </div>
        </li>
      </ul>
    )
  }
}