import React, { useState, Component } from 'react';
import Card from '../components/Card';
import Buttons from '../components/Buttons';
import './App.css';


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      ind: 0,
      curIndex: 0,
      previousJokes: [],
      currentJoke: {}, 
    }
  }

  onNewBtnClick = (event) => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response=>response.json())
      .then((joke) => {
        this.setState({ 
          currentJoke:joke,
          previousJokes:  [...this.state.previousJokes, joke],
          curIndex: this.state.curIndex + 1,
          ind: this.state.curIndex +1,
         });       
    });
  }

  onPrevBtnClick = (event) => {
    var myInd = (this.state.ind>1 ? this.state.ind-1 : 0);

    console.log(myInd);    
    this.setState({ind: myInd}, () => this.setState({currentJoke: this.state.previousJokes[myInd]}));

    // var test=0;
    // if (this.state.ind<=1) {
    //   test=0;
    // } else {
    //   test=this.state.ind-1;
    //   this.setState({})
    // }
    // this.setState({currentJoke: this.state.previousJokes[test]});
  }

  componentDidMount() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response=>response.json())
      .then((joke) => {
        this.setState({currentJoke:joke})        
        this.setState(prevState => ({
            previousJokes: [...prevState.previousJokes, joke]
        }))
    });
  }

  render() {
    // console.log(this.state.currentJoke);
    return (
      <div className="App">
          <Buttons onNewBtnClick={this.onNewBtnClick} onPrevBtnClick={this.onPrevBtnClick} />
        <header className="App-header">
          <Card 
            joke = {this.state.currentJoke.value}
            cnum = {Number(this.state.ind)}
            tot = {Number(this.state.curIndex)}
          />       
        </header>
      </div>
    );
  }
}

export default App;
