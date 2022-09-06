//Create a project using create-react-app ... DONE
// Transform the App.js into a class-based component... DONE
// Implement a state for this class containing a Person ={ fullName,bio, imgSrc, profession} and a boolean shows...DONE
//Add a button that toggles the show state. When the show state is true, the person's profile will appear...DONE
//Create a field that shows the time interval since the last component was mounted using the component lifecycle...DONE


import "./App.css";
import React from "react";
import img from "../src/assets/pro-photo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import LastUpTime from "./components/LastUpTime";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      person: {
        fullName: "",
        bio: "",
        imgSrc: "",
        profession: "",
      },

      show: false,
    };
  }


  handleClick = () => {
    this.setState({
      person: {
        fullName: "Wassim OUELHAZI",
        bio: "Studied Instrumentation engineering",
        imgSrc: img,
        profession: "Measurement Engineer",
      },

      show: !this.state.show,
    });
  };

  render() {
    return (
      <>
        <br></br>
        <Button
          type="button"
          onClick={() => this.handleClick()}
          variant="danger"
        >
          {this.state.show ? " Hide Profile" : "Show Profile"}
        </Button>
        <br></br>
        <img src={this.state.show && this.state.person.imgSrc} alt="" />
        <div className="desc">
          <h2>{this.state.show && this.state.person.fullName}</h2>
          <h6>{this.state.show && this.state.person.bio}</h6>
          <h6>{this.state.show && this.state.person.profession}</h6>
        </div>
        {this.state.show && <LastUpTime />}
      </>
    );
  }
}

export default App;
