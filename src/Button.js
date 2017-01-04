import React, { PropTypes, Component } from 'react';
import shallowEqual from 'fbjs/lib/shallowEqual';

export default class Button extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(nextProps, this.props);
  }

  handleClick = val => ev => {
    this.props.onClick(val);
  }

  render() {
    console.log('render!');
    return (
      <div>
        <button onClick={this.handleClick('Google')}>{this.props.caption}</button>
      </div>
    );
  }
};

