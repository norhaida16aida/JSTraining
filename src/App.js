import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}


const Hello = () => <h2> HELLO WORLD FROM HSBC</h2>

// functional Component,  Stateless Component
// reuse
const Image = (props) => {
 let {src,title} = props;
 src = src || 'https://www.w3schools.com/html/pic_trulli.jpg';
 title = title || 'CSI Training Demo';
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
        <Timer/>
        <Hello />
        <div>
          <Image src='https://www.w3schools.com/html/pic_trulli.jpg'  /> 
          <Image src='https://www.w3schools.com/html/img_girl.jpg'  />
          <Image src='https://www.w3schools.com/html/img_chania.jpg'  />
        </div>       

      </div>
    );
  }
}


export default App;
