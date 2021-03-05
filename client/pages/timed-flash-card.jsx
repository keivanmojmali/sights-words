import React from 'react';
import ReactCardFlip from 'react-card-flip';
import FrontComponent from '../components/front-component'
import BackComponent from '../components/back-component'

export default class TimedFlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        words: [],
        currentIndex: 0,
        correct: [],
        isFlipped: false
    };
    this.checkWord = this.checkWord.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.flashCardStart = this.flashCardStart.bind(this)
    // this.currentCard = this.currentCard.bind(this)
    this.dictate = this.dictate.bind(this);
    window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    //Test var
    this.currentWord = this.state.words[this.state.currentIndex]
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
  // currentCard(){

  //   if (this.state.words.length === 0) {
  //     return;
  //   }
  //   let currentWord = this.state.words[this.state.currentIndex]
  //   let cardClass = 'card';
  //   if(this.state.correct.includes(currentWord.wordId)) {
  //     cardClass = 'card success'
  //   }
  //   return (
  //     <div id={currentWord.wordId} key={currentWord.wordId} className='row mt-4'>
  //       <div className="col">
  //         <div className={cardClass}>
  //           <div className="card-body d-flex flex-column align-items-center">
  //             <h5 className="card-title text-center display-2">{currentWord.word}</h5>
  //             <p className="card-text text-center">Press the microphone button below and speak the word above.</p>
  //             <button className='fas fa-microphone' onClick={() => { this.dictate(currentWord.word, currentWord.wordId) }}></button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  handleClick(){
    e.preventdefault();
    this.setState(prevState=>({isFlipped: !prevState.isFlipped}));
  }
  flashCardStart(){
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical"
        currentWord={this.currentWord} dictate={this.dictate}
        handleClick={this.handleClick}>
        <FrontComponent
          onClick={this.handleClick}
        >
        </FrontComponent>

        <BackComponent
          currentWord={this.currentWord} dictate={this.dictate}
          handleClick={this.handleClick}>

        </BackComponent>
      </ReactCardFlip>
    )
  }
  render() {
    console.log(this.state)
    return (
      <div className='col'>
        <div className="row">
          {this.flashCardStart()}
        </div>
      </div>
    )
  }
}
