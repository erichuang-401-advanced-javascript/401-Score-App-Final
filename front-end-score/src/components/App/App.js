import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path='/scores' component={Landing}/>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
