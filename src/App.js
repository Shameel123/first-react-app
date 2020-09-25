import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )



    return (
      <div className="App">
        <h1>Shameel's First React App </h1>
        
        <SearchBox
        placeholder='search monsters'
        handleChange={e=> this.setState({searchField : e.target.value})} 
        />
        <CardList monsters={filteredMonsters}/> 
        {/* {this.state.monsters.map(monsters => <h1 key={monsters.id}>{monsters.name}</h1>)} */}
        
      </div>
    );
  }
}

export default App;
