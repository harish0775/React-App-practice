import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {
  render() {
    const datagetstatedata = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div id="list">
            {datagetstatedata.map(moviewf => (
              <MovieCard movie ={moviewf} key={moviewf.imdbID} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;