import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
 
import { Header, Footer, Section, Middle, PageTitle } from './components/common'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
        <Route path="/Welcome to UCP">
            <PageTitle title="Welcome to UCP"/>
          </Route>

          <Route path="/Courses">
            <PageTitle title="Courses"/>
          </Route>

          <Route path="/Contact Us">
            <PageTitle title="Contact Us"/>
          </Route>

          <Route path="/Login">
            <PageTitle title="Login"/>
          </Route>
        </Switch>

      <Section />
      <Middle />
  
      <Footer />
    </div>
  );
}
export default App;

