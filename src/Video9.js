import React from 'react';

class Video9 extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '---',
      a: '',
      b: '',
    }
    this.update = this.update.bind(this);
  }
  update (e) {
    this.setState({
      a: this.refs.a.value,
      b: this.refs.b.value,
    })
  }
  // update (e) {
  //   this.setState({
  //     currentEvent: e.type,
  //   })
  // }
  render() {
    return (
      <div>
        {/* <textarea cols='50' rows='20' 
          onKeyPress={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onMouseEnter={this.update}
          onMouseLeave={this.update}
          onCopy={this.update}
        />
      <h1>{this.state.currentEvent}</h1> */}
      <input ref='a' type='text' onChange={this.update} />{this.state.a}
      <hr />
      <input ref='b' type='text' onChange={this.update} />{this.state.b}
      </div>
    )
  }
}

export default Video9;