# Click-Game

This project creates a memory game using React. Click a super hero image to earn points but don't click the same super more than once!

## Overview
From the terminal, ran create-react-app my-click-game. Required node modules,package.json files, and bolierplate code was created as a result. Created a `.gitignore` file to exclude: `node_modules and .DS_Store`. A json file was created that contained 12 image links to super heros (Wikimedia). Components were created for Container, Column and Row to essentially render the images properly. Created Title component to render and style the title section. Created Nav component to style and render to the page the game titlw, score, top score and correct/sorry message to the navigation bar. Created wrapper component to basically style the main section of the app. Created SuperCard component to handle onClick events and to shuffle the images. Created stateful App component. Created state object that tracked the state change for the current score, top score, number of clicks, and the super hero array. Created functions that handleReset of the score, handleIncrement of the score, handleShuffle of the images and handleClick events on the image. All state changes are tracked and rendered to the browser. 

## How to use the app
When the page opens (https://gd-click-game.herokuapp.com/), the user is shown 12 super hero characters. When the user clicks a super hero, the image shuffles randomly. The object of the game is to click a unique super hero to score points. If the user clicks the same super hero during the game, the game is over and the score resets. A high score is achieved when the user "remembers" and clicks the most unique super heros.   

## Technologies used: 
React 
JavaScript ES6
Heroku

## My role in app development
According to the project specifications and using classroom exercises, online tutorials and online code snippets as examples, I was able to create the code and teste the functionality of this application.

## Deployment  
GitHub - https://github.com/Gail-Deadwyler/Clicky-Game.git  
Heroku - https://gd-click-game.herokuapp.com/
