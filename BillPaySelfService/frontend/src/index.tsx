

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'q2-tecton-sdk';

import { App } from './App';


const init = async () => {
  await connect({
    testOptions: {
      // loadElements needed for central extension
      loadElements: true,
    },
  });

  ReactDOM.render(<App />, document.getElementById('root'));
};
console.log("Test")

init();
