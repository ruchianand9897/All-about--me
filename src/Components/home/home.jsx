import React, { Component } from "react";
import Main from '../main/main.jsx'
import Content from '../content/content.jsx'

import './home.scss';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        name:"ruchi"
    }
  }
  
  render() {
    return (
      <div className="main">
        {/* <Main /> */}
        <div className="menu">
            <div id="item1">
                <Main />
            </div>
            <div id="item2">
                <Content />
            </div>
        </div>
      </div>
    );
  }
}

export default Home;