import React, { Component } from "react";
import CardComponent from "../components/cardComponent";
import Scrool from "../components/Scrool";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchData: "",
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ robots: user }));
  }

  onSearchChange = (data) => {
    this.setState({ searchData: data.target.value });
  };
  render() {
    const { robots, searchData } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchData.toLowerCase());
    });
    return (
      <div className={"tc"}>
        <h1 className="f1 bg-white ma3 ba2 pa2 br2 ">Robotics React App</h1>
        <SearchBox search={this.onSearchChange} />
        <Scrool>
          <CardComponent robots={filterRobots} />
        </Scrool>
      </div>
    );
  }
}

export default App;
