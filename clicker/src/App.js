import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import pictures from "./pictures.json";
import PicCard from "./components/PicCard/picCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";


class App extends React.Component {

  constructor(props) {
   super(props);

    this.state = {
    score: 0,
    priorScore: 0,
    pictures: pictures
 
    } 
  }

    render(){

      return(

        <Wrapper>
        <h1>Clicker Game</h1>
        <div><h1>Score</h1>{this.state.score}<h1>priorScore</h1>{this.state.priorScore}</div>
        <div className="jumbotron">
        <h2>Click different images for points : ) </h2>
        </div>

        {this.state.pictures.map((picture, index) => (
          <PicCard 
          key = {index}
          image = {picture.image}
          index = {index}
          handleClick ={(index) => {
            this.handleClick(index);
          }}
          />

          )
          )}
        </Wrapper>

        );
    }


        
   shuffle(a) {

     for (let i = a.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [a[i], a[j]] = [a[j], a[i]];
     }
     return a;
   }

  handleClick(index){
    let {pictures, score, priorScore} = this.state;

    if(!pictures[index].clicked){
      pictures[index].clicked = true;
      score++;
    }else{
      pictures = pictures.map((picture, index) => {
        picture.clicked = false;
        return picture;
      });

      priorScore = score > priorScore ? score : priorScore;
      score = 0;
    }

    pictures = this.shuffle(pictures)

    this.setState(

    {pictures, score, priorScore}

    )
  }

}





export default App;



