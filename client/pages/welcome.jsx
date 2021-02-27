import React from 'react';

export default class Welcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    //SAVE TO LOCAL STORAGE //
    //THEN SEND THEM TO THE NEXT STEP//
  }
  onChange(event){
    let stateProp = event.target.name;
    this.setState({stateProp: event.target.value})
  }
  render(){
    return(
      <div className='col'>
        <div className="row mt-4 mb-4">
          {/* THIS IS WHERE THE VIDEO WILL GO */}
          <div className="col">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" ></iframe>
            </div>
          </div>
        </div>
        <div className="row mb-4">
      {/* THIS IS WHERE THE BOTTOM INFORMATION WILL GO */}
      <div className="col">
        <div className="row bg-dark text-light justify-content-center">
          <h3>Welcome to Sight Words</h3>
        </div>
      </div>
        </div>
        <div className="row">
          {/* THIS IS WHERE THE EMAIL FORM WILL GO */}
          <div className="col">
            <form>
              <div className="form-group d-flex justify-content-around">
                <input type="text" type='email' name='email' className='form-control text-center' placeholder='Enter Your Email'
                  value={this.state.userEmail}
                  onChange={this.onChange}
                />
                <button type='submit' className='btn btn-primary ml-2' onClick={this.onClick}>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col text-center justify-content-center">
            <p>
              Mauris hendrerit viverra erat, eget consequat nulla bibendum at.
              Quisque enim diam, volutpat sed cursus a, volutpat eu diam. Praesent auctor
            </p>
          </div>
        </div>
      </div>
    )
  }
}
