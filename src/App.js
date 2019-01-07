import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>/r/reactjs</h1>
        <ul>
          {this.state.posts.map(post => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
