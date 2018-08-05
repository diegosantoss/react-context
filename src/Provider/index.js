import React from "react";
import { Context } from "../Context";

class Provider extends React.Component {
  state = {
    users: [
      { name: "Diego", email: "dsaantos1995@gmail.com", idade: 23 },
      { name: "Duda", email: "eduarda.ama73@gmail.com", idade: 20 }
    ],
    deleteItem: item => this.deleteItem(item),
    addItem: item => this.addItem(item),
    updateItem: item => this.updateItem(item)
  };

  deleteItem = item => {
    const users = this.state.users.filter(user => user.name !== item.name);
    this.setState({
      users
    });
    console.log("deleteitem: ", item);
  };

  addItem = item => {
    console.log("addItem: ", item);
  };

  updateItem = item => {
    console.log("updateItem:", item);
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
