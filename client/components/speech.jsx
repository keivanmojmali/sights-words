import React from 'react';

export default class Speech extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentWord: ''
    }
  }
}


const $microphone = document.querySelector('#microphone');
const window.SpeechRecognition = webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

$microphone.addEventListener('click', () => {
  //Add sound play here
  dictate()

})

const dictate = () => {
  recognition.start();
  recognition.onresult = (event) => {
    console.log(event)
  }
}
