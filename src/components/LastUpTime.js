import React from "react";

import Card from "react-bootstrap/Card";

class SecCounter extends React.Component {
  constructor() {
    console.log("Construcor");
    super();
    this.state = { count: 0, timer: 0, interval: null };
  }

  //-------------------- State LifeCycle ------------------------

  componentDidMount() {
    console.log("Component did Mount()");

    //---------- Auto Increment Functions---------

    this.setState({
      interval: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      ),
    });
  }

  componentDidUpdate() {
    console.log("Component did Update() ");
  }

  componentWillUnmount() {
    console.log("Component will unMount()");
    clearInterval(this.state.interval);
  }
  //------------------- Button Functions ------------------------

  render() {
    return (
      <>
        <Card
          className="text-center mt-4 "
          style={{ justifyContent: "center" }}
        >
          <Card.Body>
            <Card.Title>
              This page was updated {this.state.timer} s ago
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default SecCounter;
