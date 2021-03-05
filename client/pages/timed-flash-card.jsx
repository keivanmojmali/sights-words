import React from 'react';

export default class TimedFlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        words: [],
        currentIndex: 0,
        correct: [],
        ready: false
    };
    this.checkWord = this.checkWord.bind(this)
    this.currentCard = this.currentCard.bind(this)
    this.dictate = this.dictate.bind(this);
    window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const clearInterval = setInterval(()=>{
      //a function
    },5000)
    //CHANGE TO RANDOM WORD ONCE YOU MAKE END POINT IN API
    fetch('/store/getWords')
      .then(result => result.json())
      .then(data => this.setState({ words: data }))
      .catch(err => console.error(err))
  }
  dictate(word, wordId) {
    this.recognition.start();
    console.log('started')
    this.recognition.onresult = (event) => {
      const speechToText = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join(' ');
      this.checkWord(word, speechToText, wordId);
      this.recognition.stop();
    }
  }
  checkWord(word, speechToText, wordId) {
    //add in correct sound in here
    if (word === speechToText) {
      const correct = [...this.state.correct]
      if (correct.includes(wordId)) {
        return;
      } else {
        correct.push(wordId)
        this.setState({ correct })
      }
    } else {
      //Add in incorrect sound here
    }
  }
  currentCard(){

    if (this.state.ready === false) {
      return (
        <div className='row mt-4'>
          <div className="col">
            <div className='card'>
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-center display-2">Press Start</h5>
                <p className="card-text text-center">Press the microphone button below and speak the word above.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    let currentWord = this.state.words[this.state.currentIndex]
    let cardClass = 'card';
    if(this.state.correct.includes(currentWord.wordId)) {
      cardClass = 'card success'
    }
    return (
      <div id={currentWord.wordId} key={currentWord.wordId} className='row mt-4'>
        <div className="col">
          <div className={cardClass}>
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title text-center display-2">{currentWord.word}</h5>
              <p className="card-text text-center">Press the microphone button below and speak the word above.</p>
              <button className='fas fa-microphone' onClick={() => { this.dictate(currentWord.word, currentWord.wordId) }}></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  handleClick(){
    event.preventDefault();
    this.setState({ready:true})
  }
  render() {
    console.log(this.state)
    return (
      <div className='col'>
        <div className="row d-flex flex-column align-items-center justify-content-center">
          {this.currentCard()}
          <h2 className='mt-4'>Press Button When ready</h2>
          <button onClick={this.handleClick} className='btn btn-primary'>Start</button>
        </div>
      </div>
    )
  }
}
