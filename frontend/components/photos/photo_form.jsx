import React from 'react';
import { withRouter } from 'react-router-dom';

class PhotoForm extends React.Component {
  constructor (props){
    super(props);
    this.state = this.props.photo;
  }
  
  render(){
    return (
      <div>
        <nav className="add-sub-nav">
          <button id="add">Add</button>
          <button id="upload">Upload</button>
        </nav>
        <div className="add-content">
          <div className="add-content-content">
            <button id="content-upload">Choose photos and videos to upload</button>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(PhotoForm);


