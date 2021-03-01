import React from 'react'
import NavBar from '../components/nav-bar'
import Welcome from './welcome'
import SpeechFlashCards from './speech-flash-cards'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      route: ''
    }
  }
  componentDidMount(){
    window.addEventListener('resize', () => {
      root.style = `height: ${window.innerHeight}px`;
    });
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }
  render() {
    return(
      <div className='container-fluid h-100 d-flex flex-column'>
        <div className="row">
          <NavBar />
        </div>
        <div className="row f-grow">
          <SpeechFlashCards />
        </div>
      </div>
    )
  }
}
