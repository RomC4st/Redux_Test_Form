import React, { Component } from "react";
import CreatePost from "./containers/CreatePost.js";
import PostList from "./containers/PostList.js";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const stylesApp = {
  marginTop: 40
};

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={stylesApp}>
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
