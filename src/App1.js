import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Table';

//Timer code
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

// Welcome World
const Hello = () => <h2> Hello World </h2>

//Table Title
const TableDesc = () => <h1> List of Employee and Job name</h1>

// functional Component,  Stateless Component
// reuse
// Images
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
    const state = {
      characters: []   
    };

    const { characterData } = this.props;
    const removeCharacter = index => {
      const { characters } = this.state;
    
      this.setState({
          characters: characters.filter((character, i) => { 
              return i !== index;
          })
      });
    }

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
           <TableDesc/>
           <div className="container">
            <Table
            characterData={state.characters}
            removeCharacter={this.removeCharacter}
            />
            <Form />
    </div>
           

      </div>
    );
  }
}



export default App;
