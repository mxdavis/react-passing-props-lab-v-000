import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruit()
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({fruit: fruit}))
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({filters: filters}))
  }

  updateFilterCallback = (event) => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }

 render() {
   return (
    <FruitBasket fruit={this.state.fruit}
                 filters={this.state.filters}
                 currentFilter={this.state.currentFilter} 
                 updateFilterCallback={this.updateFilterCallback}
                 />
   )
  }
}

export default App;
