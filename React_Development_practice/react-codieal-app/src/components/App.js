import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    console.log('Props', this.props);
    return <div>App</div>;
  }
}
function napStateToprops(state) {
  return {
    posts: state.posts,
  };
}

export default connect(napStateToprops)(App);
