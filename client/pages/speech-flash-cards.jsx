import React from 'react';

export default class SpeechFlashCards extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      words: [],
      currentWord: '',
    }
  };
  render(){
    return(
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="row bg-dark text-light justify-content-center text-center">
              <h3>These Are Sight Words</h3>
              <p>
                Duis ut lorem felis. Nunc vulputate sit amet ex.
          </p>
            </div>
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    )
  }
}
