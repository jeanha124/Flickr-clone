import merge from 'lodash/merge';
import { RECEIVE_PHOTO, RECEIVE_TAG, REMOVE_TAG };

const tagsReducer =(state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, action.tags);
    case RECEIVE_TAG:
      return merge({}, state, {[action.tag.id]: action.tag });
    case REMOVE_TAG:
      let newState - merge({}, state);
      delete newState(newState[action.id]);
      return newState;
    default:  
      return state;
  }
};

export default tagsReducer;