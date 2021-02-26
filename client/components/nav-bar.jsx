import React from 'react';

export default class NavBar extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-fixed-top w-100 navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Sight Words</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Practice</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
