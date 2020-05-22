import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmployeeModule from '../src/components/EmployeeModule';

class App extends Component {
  render(){
  return (
    <div className="App">
    <h1>My First Application</h1>
    <h2>Header Section</h2>
    <h3>app.js file</h3>
    <EmployeeModule></EmployeeModule>   
    </div>
  );
  }
}

export default App;
