import React from 'react';

export default class PressSightWord extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sentences: [],
    };
    this.currentSentence = this.currentSentence.bind(this);
    this.currentWord = this.currentWord.bind(this);
  }
  componentDidMount(){
    fetch('/store/getWords')
      .then(result => result.json())
      .then(data => this.setState({ words: data }))
      .catch(err => console.error(err))
  }
  currentSentence(sentenceArray){
    return sentenceArray.map((item,index)=>{
      return (
        <button className='btn'>{sentenceArray.word}</button>
      )
    })
  }
  currentWord(){
    return(
      <>
      <div className='row'>
        <div className="col">
          <h1>Press the Sight Word Below</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {this.currentSentence()}
        </div>
      </div>
      </>
    )
  }
  render(){
    return(
      <div className='col'>
        {this.currentWord()}
      </div>
    )
  }
}
