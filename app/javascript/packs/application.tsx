import React from 'react';
import ReactDOM from 'react-dom';

import "@hotwired/turbo-rails"
import "../controllers"

const App: () => React.JSX.Element = () => (
  <div>
    <h1>Web Forum</h1>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });

  export default App;
  