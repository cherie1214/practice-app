import React, { Component } from "react";
import Store from "../store";

import { FromLoginToHome } from '../navigation';

class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: "user1",
      isSigned: false,
    }
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <FromLoginToHome />
      </Store.Provider>
    );
  }
}

export default AppContainer;
