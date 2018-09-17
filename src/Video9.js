import React from 'react';

class Video9 extends React.Component {
  constructor() {
    super();
    this.state = {
      currentEvent: '---',
    }
    this.update = this.update.bind(this);
  }
  update (e) {
    this.setState({
      currentEvent: e.type,
    })
  }
  render() {
    return (
      <div>
        <textarea cols='50' rows='20' 
          onKeyPress={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onMouseEnter={this.update}
          onMouseLeave={this.update}
          onCopy={this.update}
        />
      <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

export default Video9;