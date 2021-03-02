import React from 'react';

export default class SpeechFlashCards extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      words: [],
      currentIndex: 0,
      pass: false,
    }
    this.checkWord = this.checkWord.bind(this)
    this.currentCard = this.currentCard.bind(this)
    this.dictate = this.dictate.bind(this);
    this.microphone = document.querySelector('.fas fa-microphone');
    window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
  }
  componentDidMount(){

    fetch('/store/getWords')
    .then(result=>result.json())
    .then(data=>this.setState({words:data}))
    .catch(err=>console.error(err))

    this.microphone.addEventListener('click', () => {
      //Add sound play here
      this.dictate();

    })
  }
  dictate() {
    this.recognition.start();
    this.recognition.onresult = (event) => {
    const speechToText = Array.from(event.results)
    .map(result =>result[0])
    .map(result => result.transcript)
    .join(' ');
    this.checkWord(speechToText);
    }
  }
  checkWord(speechToText) {
    if (speechToText === this.state.currentWord) {
      this.setState({pass:true})
    } else {
      console.log('no!')
    }
  }
  currentCard() {
    if(this.state.words === undefined) {
      return;
    }
    return this.state.words.map((item)=> {
      return (
        <div key={item.wordId} className="row mt-4 border border-success">
          <div className="col">
            <div className="card">
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-center display-2">{item.word}</h5>
                <p className="card-text text-center">Press the microphone button below and speak the word above.</p>
                <button className='fas fa-microphone' id={item.wordId}></button>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  render(){
      return (
        <div className="col">
          <div className="row mt-4">
            <div className="col">
              <div className="row bg-dark text-light flex-column justify-content-center text-center">
                <h3>These Are Sight Words</h3>
                <p>
                  Duis ut lorem felis. Nunc vulputate sit amet ex.
          </p>
              </div>
            </div>
          </div>
          {this.currentCard()}
        </div>
      )
  }
}
