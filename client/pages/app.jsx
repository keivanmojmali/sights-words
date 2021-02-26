import React from 'react'
import NavBar from '../components/nav-bar'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }
  render() {
    return(
      <div className='container-fluid'>
        <div className="row">
          <NavBar />
        </div>
        <div className="row">

        </div>
      </div>
    )
  }
}
