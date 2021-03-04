export default class FrontComponent extends React.Component {
  constructor(props){
    super(props)
  };
  render(){
    return (
      <div className='row mt-4'>
        <div className="col">
          <div className='card'>
            <div className="card-body d-flex flex-column align-items-center">
              <h2>Press the Start Button</h2>
              <button onClick={this.handleClick}>Click to flip</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
