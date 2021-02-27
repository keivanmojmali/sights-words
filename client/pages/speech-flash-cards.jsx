import React from 'react';
import Speech from '../components/speech'

export default class SpeechFlashCards extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      words: [],
      currentWord: '',
    }
  };
  componentDidMount(){
    microphone.addEventListener('click', () => {
      //Add sound play here
      Speech.dictate()

    })
  }
  render(){
    return(
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
            <i className='fas fa-microphone' id='microphone'></i>
          </div>
        </div>
      </div>
    )
  }
}
