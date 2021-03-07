import React from 'react';

export default class PressSightWord extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sentences: [
        {
          word: 'the',
          sentences: ['Please', 'get', 'the', 'door'],
        }
      ],
      currentIndex: 0,
    };
    this.currentSentence = this.currentSentence.bind(this);
    this.currentWord = this.currentWord.bind(this);
    this.handleclick = this.handleclick.bind(this)
  }
  handleclick(currentWord,item){
    if(currentWord === item) {
      console.log('yess')
    } else {
      console.log('nooo')
    }
  }
  componentDidMount(){
    // ADD THE FETCH FOR THE SENTENCES HERE
  }
  currentSentence(){
    const currentSentence = this.state.sentences[this.state.currentIndex];
    const currentWord = currentSentence.word;
    return currentSentence.sentences.map((item,index)=>{
      return (
        <button key={index} onClick={()=>{this.handleclick(currentWord,item)}} className='btn'>{item}</button>
      )
    })
  }
  currentWord(){
    return(
      <>
      <div className='row'>
        <div className="col d-flex align-items-center justify-content-center">
          <h1>Press the Sight Word Below</h1>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
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
