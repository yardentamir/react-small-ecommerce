import React from 'react';

export default class ProductPayment extends React.Component {


  render = () => {
    return (
      <div>

        {
          this.props.cartData.length > 0 ?
            <div class="ui items">


              {/* <div>{this.props.cartData[0].title}</div>  */}
            </div>
            : <span>nothing</span>
        }
      </div>
    )
  }
}

