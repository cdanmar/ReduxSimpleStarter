import React from 'react';
import ReactDOM from 'react-dom';

// Create new component, this compontent should produce some html

const App = () => {
  return <div>Hi!</div>;
}

// Take this generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
