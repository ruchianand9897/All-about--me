import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from '../../assets/photo.jpeg'
import MediaQuery from 'react-responsive'
import './main.scss';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
        name:"ruchi"
    }
  }
  
  render() {
    return (
      <div className="menu">
          <div className="imageContainer">
          <MediaQuery minDeviceWidth={1295}>
            <ReactRoundedImage 
                image={MyPhoto} 
                hoverColor="#DD1144"
                roundedColor="#B4CDED"
                roundedSize = "10"
              />
          </MediaQuery>
          <MediaQuery minDeviceWidth={920} maxDeviceWidth={1295}>
            <ReactRoundedImage 
                image={MyPhoto} 
                hoverColor="#DD1144"
                roundedColor="#B4CDED"
                roundedSize = "5"
                imageWidth="180"
                imageHeight="180"
              />
          </MediaQuery>

          <MediaQuery minDeviceWidth={580} maxDeviceWidth={919}>
            <ReactRoundedImage 
                image={MyPhoto} 
                hoverColor="#DD1144"
                roundedColor="#B4CDED"
                roundedSize = "5"
                imageWidth="140"
                imageHeight="140"
              />
          </MediaQuery>
          <MediaQuery minDeviceWidth={120} maxDeviceWidth={579}>
            <ReactRoundedImage 
                image={MyPhoto} 
                hoverColor="#DD1144"
                roundedColor="#B4CDED"
                roundedSize = "5"
                imageWidth="100"
                imageHeight="100"
              />
          </MediaQuery>
          </div>
          <div className = "menuButton">
            <span className="item">
              Home
            </span>
            <span className="item">
              About
            </span>
            <span className="item">
              Resume
            </span>
            <span className="item">
              Contact
            </span>
          </div>
          
      </div>
    );
  }
}

export default Main;