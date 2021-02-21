import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.jsx";
import { SearchBox } from "./components/search-box/search-box.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChangeEvent = this.handleChangeEvent.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChangeEvent = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChangeEvent={this.handleChangeEvent}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
