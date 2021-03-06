import { connect } from 'react-redux';
import Homepage from './homepage';
import { receiveAllPhotos } from '../../actions/photo_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    photos: Object.values(state.entities.photos),
    users: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    receiveAllPhotos: () => dispatch(receiveAllPhotos())
  };
};

export default connect(msp, mdp)(Homepage);

