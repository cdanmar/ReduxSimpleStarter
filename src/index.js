import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDq5lg4TYrJs-zh3txMyFSRWRqqSpEEH50';



// Create new component, this compontent should produce some html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this generated html and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
