import React, { Component } from 'react';

@log('haha')
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const lo = this.logger('nanjing');
    console.log(lo);
  }

  render() {
    return <div>index</div>;
  }
}

function log(text) {
  return function (target) {
    target.prototype.logger = (t) => `${text},${t}`;
  };
}

export default Index;
