/**
 * @author Maria Fernanda Serna
 */

import {connect} from 'react-redux';
import Repositories from './repositories';
import {getListReposByUser} from './../../reducers/repos/actions';

const mapStateToProps = state => ({
  ...state.repository,
});

const mapDispatchToProps = dispatch => ({
  getListReposByUser: userName => {
    dispatch(getListReposByUser(userName));
  },
});

const RepositoriesContainer = connect(mapStateToProps, mapDispatchToProps)(
  Repositories,
);
export default RepositoriesContainer;
