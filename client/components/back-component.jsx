export default class BackComponent extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
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
}
