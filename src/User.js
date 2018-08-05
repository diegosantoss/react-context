import React from "react";
import { Context } from "./Context";

export default () => {
  return (
    <React.Fragment>
      <Context.Consumer>
        {state => {
          console.log(state);
          return state.users.map((user, index) => {
            return (
              <section key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src=".../100px180/"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.idade}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => state.deleteItem(user)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => state.addItem(user)}
                    >
                      Add
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => state.updateItem(user)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </section>
            );
          });
        }}
      </Context.Consumer>
    </React.Fragment>
  );
};
