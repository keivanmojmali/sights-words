import React from 'react';

export default class Welcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userEmail='',
    };
  }
  onClick(){
    //SAVE TO LOCAL STORAGE //
    //THEN SEND THEM TO THE NEXT STEP//
  }
  render(){
    return(
      <div className='col'>
        <div className="row">
          {/* THIS IS WHERE THE VIDEO WILL GO */}
        </div>
        <div className="row">
          {/* THIS IS WHERE THE EMAIL FORM WILL GO */}
          <div className="col">
            <form>
              <div className="form-group">
                <input type="text" type='email' name='email' className='form-control'
                value={this.state.userEmail} />
                <button type='submit' className='btn btn-primary' onClick={this.onClick}>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
      {/* THIS IS WHERE THE BOTTOM INFORMATION WILL GO */}
        </div>
      </div>
    )
  }
}
