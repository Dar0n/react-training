import React from 'react';
import './styles.css';

class Video14 extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
  };
  }
  componentWillMount = () => {
    fetch('https://swapi.co/api/people/')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then( ({results: items}) => {
        console.log(items);
        this.setState({items,});
      })
  }
  filter(e) {
    const filter = e.target.value;
    const match = this.state.items.filter(item => item.name === filter);
    const green = document.querySelectorAll('.green-text');
      if (green.length) {
        green.forEach(el => el.classList.remove('green-text'));
      }
    if (match.length) {
      const nodes = document.querySelectorAll('h4');
      const nodeToColor = Array.prototype.filter.call(nodes, (node) => {
        return node.textContent === match[0].name;
      })[0];
      nodeToColor.classList.add('green-text');
    }
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.filter.bind(this)} />
        {this.state.items.map(item => {
          return <Name key={item.name} name={item.name}/>;
        })}
      </div>
    )
  }
}

const Name = (props) => {
  return <h4>{props.name}</h4>
}

export default Video14;