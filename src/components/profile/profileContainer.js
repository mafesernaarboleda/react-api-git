/**
 * @author Maria Fernanda Serna
 */

import {connect} from 'react-redux';
import Profile from './profile';
import {getUser} from './../../reducers/profile/actions';

const mapStateToProps = state => ({
  ...state.profile,
});

const mapDispatchToProps = dispatch => ({
  getUser: userName => {
    dispatch(getUser(userName));
  },
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default ProfileContainer;
