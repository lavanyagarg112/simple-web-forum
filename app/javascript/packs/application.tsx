import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <h1>Hello, World!</h1>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
  