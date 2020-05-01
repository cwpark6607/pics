import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID yd7FE0Da0UzYaiRS8CVJ4jC0UBQjWa1UAAh4oyqbuF0'
      },
      params: {
        query: term
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={ this.onSearchSubmit } />
      </div>
    );
  }
}

export default App;

