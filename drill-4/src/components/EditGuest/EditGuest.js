import React, { Component } from 'react';
import './EditGuest.css';

class EditGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.guest
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.update = this.update.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  update() {
    this.props.updateGuest(this.state.text);
    //another thing we could do is tie this Component into the 
    //store directly and have this function fire off this.props.updateGuest,
    //which it would then be receiving from the store, and it would
    //affect the store directly. we would pull the index down as a prop
    //from the parent Component and pass that in here.
    this.props.hide();
  }



  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <input
            onChange={this.handleInputChange}
            value={this.state.text}
            type=""
            className="modal-input"/>
          <button
            onClick={this.update}
            type=""
            className="modal-btn">Update</button>
          <button
            onClick={this.props.hide}
            type=""
            className="modal-btn">Cancel</button>
        </div>
      </div>
    )
  }
}

export default EditGuest;
