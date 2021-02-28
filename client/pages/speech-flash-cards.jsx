import React from 'react';

export default class SpeechFlashCards extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      words: [],
      currentWord: 'the',
    }
    this.checkWord = this.checkWord.bind(this)
    this.dictate = this.dictate.bind(this);
    this.microphone = document.querySelector('#microphone');
    window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
  }
  componentDidMount(){
    microphone.addEventListener('click', () => {
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
      console.log('yes!')
    } else {
      console.log('no!')
    }
  }
  render(){
      return (
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="row bg-dark text-light flex-column justify-content-center text-center">
                <h3>These Are Sight Words</h3>
                <p>
                  Duis ut lorem felis. Nunc vulputate sit amet ex.
          </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <h1 id='currentWord'>The</h1>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <i className='fas fa-microphone' id='microphone'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
