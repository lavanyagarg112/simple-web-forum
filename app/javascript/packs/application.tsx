import React from 'react';
import ReactDOM from 'react-dom';

import "@hotwired/turbo-rails"
import "../controllers"

const App: () => React.JSX.Element = () => (
  <div>
    
  </div>
);

document.addEventListener('DOMContentLoaded', loadReact);
document.addEventListener('turbolinks:load', loadReact);


function loadReact(){
  ReactDOM.render(<App />, document.getElementById('root'));
}

  export default App;
  