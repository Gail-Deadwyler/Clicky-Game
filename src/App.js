import React, { Component } from 'react';
import SuperCard from "./components/SuperCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import super_heros from "./super-heros.json";
import './App.css';

function randomSupers(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  state = {
    super_heros,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: [],
  };

  

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "Correct!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "Sorry!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledSupers = randomSupers(super_heros);
    this.setState({ super_heros: shuffledSupers });
  };

  render() {

    return (
      <Wrapper>
        <Nav
          title="SuperHero Click Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          correctIncorrect={this.state.correctIncorrect}
        />

        <Title>SuperHero Click Game</Title>
        <Title>Click on a Super to earn points, but don't click the same Super more than once!</Title>

        <Container>
          <Row>
            {this.state.super_heros.map(super_hero => (
              <Column size="md-3 sm-6">
                <SuperCard
                  key={super_hero.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={super_hero.id}
                  image={super_hero.image}
                />
              </Column>
            ))}
          </Row>
        </Container>

      </Wrapper>

    );
  }
}



export default App;
