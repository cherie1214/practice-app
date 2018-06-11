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

  actions = {
    login: (id) => {
      this.setState({
        userName: id,
        isSigned: true,
      })
    },
    logout: () => {
      this.setState({
        userName: "",
        isSigned: false,
      })
    }
  }

  render() {
    return (
      <Store.Provider value={{state : this.state, actions: this.actions}}>
        <FromLoginToHome />
      </Store.Provider>
    );
  }
}

export default AppContainer;
