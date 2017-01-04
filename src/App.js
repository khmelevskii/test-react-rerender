import React, { PropTypes, Component } from 'react';
import Button from './Button';
import shallowEqual from 'fbjs/lib/shallowEqual';

import {whyDidYouUpdate} from 'why-did-you-update';
whyDidYouUpdate(React);

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      company: 'Facebook',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(shallowEqual(nextProps, this.props) && shallowEqual(nextState, this.state));
  }

  setCompany = company => {
    this.setState({ company });
  }

  handleChangeCompany = ev => {
    this.setState({ company: ev.target.value });
  }

  render() {
    const { company } = this.state;

    return (
      <div>
        <h1>{company}</h1>

        <input onChange={this.handleChangeCompany} value={company} />

        <Button caption="change company"
          onClick={this.setCompany} />
      </div>
    );
  }
};
