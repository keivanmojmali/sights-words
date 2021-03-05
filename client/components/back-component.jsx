import React from 'react'

export default class BackComponent extends React.Component {
  constructor(props){
    super(props);
    this.card = this.card.bind(this)
  };
  card(){
    console.log('aaaaaa', this.props)
    if (this.props.currentWord === undefined) {
      return;
    }
    return (
      <div id={this.props.currentWord.wordId} key={this.props.currentWord.wordId} className='row mt-4'>
        <div className="col">
          <div className='row mt-4'>
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title text-center display-2">{this.props.currentWord.word}</h5>
              <p className="card-text text-center">Press the microphone button below and speak the word above.</p>
              <button className='fas fa-microphone' onClick={() => { this.props.dictate(this.props.currentWord.word, this.props.currentWord.wordId) }}></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render(){
    return (
      <>
        {this.card()}
      </>
    )
  }
}
