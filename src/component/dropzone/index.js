import React from 'react';

import React from 'react';
export default class dropzone extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropReady: false
    }

    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);

  }

  handleDragEnter(e) {
    this.setState({ dropReady: true });
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDragLeave(e) {
    this.setState({ dropReady: false });

  }

  handleDrop(e) {
    try {
      let item = JSON.parse(e.dataTransfer.getData('application/json'))
      this.props.onComplete(null, item);
    } catch (e) {
      this.props.onComplete(e);
    }
    this.setState({ dropReady: false })
    //TODO setstate
  }

  render() {
    let className = classToggler({
      'dropzone': true,
      'drop-ready': this.state.dropReady,
    });

    return (
      <div>
        <p>Hello World</p>
      </div>
    );
  };
};
},