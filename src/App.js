import React from 'react';
import propTypes from 'prop-types';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'Some random text',
    }

  }
  update (e) {
    this.setState({
      txt: e.target.value,
    })
  }
  render() {
    let txt = this.props.txt;
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <Button>A <Heart /> React</Button>
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

const Widget = (props) => <input type='text' onChange={props.update}></input>
const Button = (props) => <button>{props.children}</button>
const Heart = () => <span>&hearts;</span>

// const App = () => <h1>Olala!</h1>
App.propTypes = {
  txt: propTypes.string,
  nmbr: propTypes.number.isRequired,
}

App.defaultProps = {
  nmbr: 5,
}

export default App;
