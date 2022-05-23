import React from 'react';
import ReactDOM from 'react-dom';

import dd from './index.html';

import { add } from './utils/Tool';
export default function Index() {
  const aa = add(3, 4);
  console.log(aa, dd);
  return <div>21121</div>;
}

const root = document.getElementById('root');
// root.textContent = "webpackwqewq2"
ReactDOM.render(<Index />, root);
