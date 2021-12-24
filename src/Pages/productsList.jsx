import React from 'react';
import { Link } from 'react-router-dom';
import Api from "../api";
import Card from "../Components/Card";
import Spinner from "../Components/Spinner";
import { v4 as uuidv4 } from "uuid"; // makes random IDs

export default class App extends React.Component {

  state = { data: [] };


  componentDidMount = async () => {
    const data = await Api.getItems();
    this.setState({ data });
  }


  render = () => {
    return (
      <div>
        <div className="main-div">
          {this.state.data.length <= 0 && <Spinner />}
          {
            this.state.data &&
            this.state.data.map((product, index) => {

              return (
                <Card key={uuidv4()} id={index} img={product.img} title={product.title} obj={product} source={product.source} price={product.price} callBack={this.props.callBack} count={this.props.counter} />
              )
            })
          }
        </div>
      </div>
    )
  }
}