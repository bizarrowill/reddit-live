import React, { Component } from "react";
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
      <div>
        <h1>Today's news from</h1>
        <h2>/r/reactjs</h2>
        <ul>
          {this.state.posts.map(post => (
            <li key={post.id}>
              <a href={post.url} target="_blank">
                {post.title}
              </a>
              <br />
              by: <strong>{post.author}</strong> with a score of {post.score}.
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
