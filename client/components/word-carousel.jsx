import React from 'react';

export default class WordCarousel extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      word: this.props.currentWord,
    }
  };
}
