import React, { Component } from "react";
import Flexi from "./components/flexi-form";
import "./App.css";

const flexiConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's Name",
      type: "TextField",
      defaultValue: ""
    },
    {
      name: "states",
      label: "Person's state",
      type: "DropDown",
      defaultValue: "Tamil Nadu",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"]
    }
  ]
};

/*

Write a Flexi React Component that is handed a JSON object that looks something like: flexiConfig
and is invoked like: <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig}/>
In this case, the component creates the appropriate TextField and DropDown html elements to allow the the user to enter the necessary information. The component also renders a submit button that calls the onSubmit function supplied in the props with a Json object as an argument that contains the user entered values for each of the items in flexiConfig.
Please note that flexiConfig may be a recursive structure, e.g., to describe a family tree.
*/

class App extends Component {
  onFlexiSubmit(submittedData) {
    alert(JSON.stringify(submittedData));
  }

  render() {
    return (
      <div className="App">
        <Flexi
          className="form"
          onSubmit={this.onFlexiSubmit}
          config={flexiConfig}
        />
      </div>
    );
  }
}

export default App;
