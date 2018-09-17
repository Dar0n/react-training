import React from 'react';
import propTypes from 'prop-types';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return (
      <h1>{txt}</h1>
    )
  }
}

// const App = () => <h1>Olala!</h1>
App.propTypes = {
  txt: propTypes.string,
  nmbr: propTypes.number.isRequired,
}

App.defaultProps = {
  nmbr: 5,
}

export default App;
