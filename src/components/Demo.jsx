import React, { Component } from "react";

class Demo extends Component {
  changHot = () => {
    this.setState({ hot: !this.state.hot });
  };

  state = { hot: false, wind: "微风" };

  render() {
    const { hot, wind } = this.state;
    return (
      <div>
        <button onClick={this.changHot}>
          今天 {hot ? "炎热" : "凉爽"},{wind}{" "}
        </button>
      </div>
    );
  }
}

export default Demo;
