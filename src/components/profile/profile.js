import React, {Component, PropTypes} from 'react';

class Profile extends Component {
  user = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {getUser} = this.props;
    getUser('khriztianmoreno');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successGetProfile) {
      this.user = nextProps.profile;
    }
  }

  render() {
    return (
      <div className="col-lg-3">
        <div className="row">
          <img
            style={{width: '300px', height: '300px'}}
            className="img-fluid rounded"
            src={this.user.avatar_url}
            alt=""
          />
        </div>
        <div className="row">
          <h1 className="personalName">{this.user.name}</h1>
          <p>{this.user.bio}</p>
          <label>{this.user.email}</label>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getUser: PropTypes.func.isRequired,
  apiError: PropTypes.string.isRequired,
};

export default Profile;
