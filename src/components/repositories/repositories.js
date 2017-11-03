import React, {Component} from "react";

class Repositories extends Component {
  repositoriesByUser = [];
  constructor(props) {
    super();
  }

  componentWillMount() {
    const {getListReposByUser} = this.props;
    getListReposByUser("mafesernaarboleda");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.successListRepos) {
      this.repositoriesByUser = nextProps.repositories;
    }
  }

  setColor(language) {
    let color;
    switch (language) {
      case 'JavaScript':
        color = '#F0DF65';
        break;
      case 'CSS':
        color = '#563F7A';
        break;
      case 'HTML':
        color = '#E14D30';
        break;
      case 'C#':
        color = '#E14D30';
        break;
      case 'Shell':
      case 'PowerShell':
        color = '#8BDE5A';
        break;
      default:
        color = '#000';
    }
    return color;
  }

  render() {
    return (
      <div className="col-lg-9">
        <h1 className="my-4">Repositories GITHUB</h1>
        <hr />
        <div className="row">
          {this.repositoriesByUser.map(repository => (
            <div key={repository.id} className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">{repository.name}</h4>
                <div className="card-body">
                  <p className="card-text">
                    {repository.description
                      ? repository.description.substr(0, 100)
                      : ''}
                  </p>
                </div>
                <div className="card-footer">
                  <a className="icons" href={repository.html_url}>
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                  <span className="icons">
                    <i className="fa fa-code-fork" aria-hidden="true" />{' '}
                    {repository.forks}
                  </span>
                  <span className="icons">
                    <i className="fa fa-eye" aria-hidden="true" />{' '}
                    {repository.watchers}
                  </span>
                  <span className="icons">
                    <i className="fa fa-star" aria-hidden="true" />{' '}
                    {repository.stargazers_count}
                  </span>
                  <span className="icons">
                    <i
                      style={{color: this.setColor(repository.language)}}
                      className="fa fa-circle"
                      aria-hidden="true"
                    />{' '}
                    {repository.language}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Repositories;
