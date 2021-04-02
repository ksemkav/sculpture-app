import React from 'react';

import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import RocketBlock from './components/RocketBlock';
import { Row, Col, Container } from 'react-bootstrap';

import firstBlock from './texts/firstBlock.json';


function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <BackgroundVideo />
        {/*Блок с описанием "проекта"*/}
        <RocketBlock
          id={1}
          author={firstBlock.author}
          text={firstBlock.text}
          avatar={firstBlock.avatar}
          instagram={firstBlock.instagram}
          isBlockFirst={true}
        />
        <RocketBlock
          id={2}
          author={firstBlock.author}
          text={firstBlock.text}
          avatar={firstBlock.avatar}
          instagram={firstBlock.instagram}
        />
        <RocketBlock
          id={3}
          author={firstBlock.author}
          text={firstBlock.text}
          avatar={firstBlock.avatar}
          instagram={firstBlock.instagram}
        />
        <RocketBlock
          id={4}
          author={firstBlock.author}
          text={firstBlock.text}
          avatar={firstBlock.avatar}
          instagram={firstBlock.instagram}
        />
        <RocketBlock
          id={5}
          author={firstBlock.author}
          text={firstBlock.text}
          avatar={firstBlock.avatar}
          instagram={firstBlock.instagram}
        />
        <RocketBlock
          id={6}
          author={firstBlock.author}
          text={firstBlock.text}
          avatar={firstBlock.avatar}
          instagram={firstBlock.instagram}
        />
        <RocketBlock
          id={7}
          author={firstBlock.author}
          text={firstBlock.text}
          avatar={firstBlock.avatar}
          instagram={firstBlock.instagram}
        />
      </div>
    </div>
  );
}

export default App;
