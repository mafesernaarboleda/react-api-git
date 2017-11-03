/**
 * @author Maria Fernanda Serna
 */

import {combineReducers} from 'redux';
import repository from './repos/repositoryReducer';
import profile from './profile/profileReducer';

const rootReducer = combineReducers({repository, profile});

export default rootReducer;
