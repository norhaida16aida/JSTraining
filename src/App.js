import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const Hello = () => <h2> HELLO WORLD FROM HSBC</h2>

// functional Component,  Stateless Component
// reuse
const Image = (props) => {
 let {src,title} = props;
 src = src || 'https://www.w3schools.com/html/pic_trulli.jpg';
 title = title || 'HSBC Training Demo';
 return (
  <img src={src} alt={title} width = "300" height="300"/>
 )
}

class App extends Component { 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <Hello />
        <div>
        <image src="https://www.w3schools.com/html/pic_trulli.jpg" title="1"/>       
        </div>
        <div>
        <Image src="https://www.w3schools.com/html/img_girl.jpg" title="2" />
        </div>
        <div>
        <Image src="https://www.w3schools.com/html/img_chania.jpg" title="3" />
        </div>
        

      </div>
    );
  }
}


export default App;
