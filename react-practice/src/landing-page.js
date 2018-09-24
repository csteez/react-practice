import React, { Component } from 'react';
import './styles/landing-page.css'; 

export default class LandingPage extends Component {
  constructor(props){
    super(props); 
    this.routeChange = this.routeChange.bind(this); 
  }
  routeChange() {
    let path = 'sign-in'; 
    this.props.history.push(path); 
  }

  render() {
    return (
      <div>
        <div className="top-bg">
          <div className="nav">
            <a href="#">Recipes</a>
            <a href="#">Nutritional Information</a>
            <button type="button" onClick={this.routeChange}>BUY NOW</button>
            </div>

            <h1>Nutritional, Delicious, Yellow</h1>
            <div className="blurb">A beneficial part of everyday diet</div>
            <img src="https://media.istockphoto.com/photos/banana-picture-id636739634?k=6&m=636739634&s=612x612&w=0&h=BQ9Z6DobjFzclh3LN7nKSljrRqycJPCq65CS8rtUHU4="></img>
          </div>
      </div>
    );
  }
}
