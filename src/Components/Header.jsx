import React from 'react';
import { Link } from 'react-router-dom';
export default class App extends React.Component {

  render = () => {
    return (
      <div>
        <div className="ui secondary pointing menu">
          <div style={{ display: 'flex' }}>
            <Link to="/" className="item">Home</Link>
            <Link to="/products" className="item">Products</Link>
          </div>
          <div>
            <Link to="/payment" className="item">
              <div className="cart">
                <div className="cart__number">
                  <i className='bx bx-cart cart__number--cartIcon'></i>
                  <span className="cart__number--background"></span>
                  <span className="cart__number--popup"></span>
                  <span className="cart__number--num">{this.props.counter}</span>
                </div>
                <div className="cart__buttons">
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}