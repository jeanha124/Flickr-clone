import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this.props.receivePhoto(this.props.match.params.photoId);
  }
  
  render(){
    return (
      <div>
        <div>
          <Link to='/photos/:display_name'>Back to Photostream</Link>
          {this.props.photo}
        </div>
      </div>
    );
  }
}

export default PhotoShow;