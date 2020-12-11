import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'
import Home  from './pages/Home'
import Contact from './pages/Contact'
import './App.css';


function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Home} />
      <Route exact path="/Contact" component={Contact} />
      
    </div>
  );
}
export default App;

