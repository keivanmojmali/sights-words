import React from 'react';

export default class Speech extends React.Component{
  constructor(props){
    super(props);
    this.dictate = this.dictate.bind(this);
    this.microphone = document.querySelector('#microphone');
    window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
    this.recognition = new SpeechRecognition();
    recognition.interimResults = true;
  }
  dictate(){
    recognition.start();
    recognition.onresult = (event) => {
      console.log(event)
    }
  }
  render(){
    return(
      <div>YES</div>
    )
  }
}
