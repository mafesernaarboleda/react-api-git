import React, {Component} from 'react';
import logo from './logo.svg';
import ProfileContainer from './components/profile';
import RepositoriesContainer from './components/repositories';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <ProfileContainer />
        <RepositoriesContainer />
      </div>
    );
  }
}

export default App;
