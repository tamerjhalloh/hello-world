import React, { Component } from "react";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Tamer",
    };

    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return <div>Lifecycle A</div>;
  }
}

export default LifeCycleA;
