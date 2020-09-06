import React, { Component } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
    };
  }
  componentDidMount() {
    axios
      .get("/api/inventory")
      .then((res) => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { inventory } = this.state;
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
