import React from 'react';

export default class TimedFlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        words: [],
        currentIndex: 0,
    };

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

  render() {
    return (
      <div className='col'>

      </div>
    )
  }
}
