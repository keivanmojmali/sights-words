import React from 'react';

export default class PressSightWord extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      words: [],
    };
    this.currentSentence = this.currentSentence.bind(this);
  }
  componentDidMount(){
    fetch('/store/getWords')
      .then(result => result.json())
      .then(data => this.setState({ words: data }))
      .catch(err => console.error(err))
  }
  currentSentence(){
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
        {this.currentSentence()}
      </div>
    )
  }
}
