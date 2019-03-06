import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import PageTitleWithLoadingMessage from './pageTitle';
import UserList from './userList';

const dataSite = "https://jsonplaceholder.typicode.com/users";
class App extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      data: [],
    };
  }

  componentDidMount = () => {
    fetch(dataSite)
      .then(response => response.json())
      .then(data => this.setState({
        data: data,
        dataLoaded: true,
      }));
  }

  render() {
    return (
      <React.Fragment>
        <PageTitleWithLoadingMessage title="Users" dataLoaded={this.state.dataLoaded} loadingMessage="(loading)"/>
        {
          this.state.dataLoaded &&
          <div className="list-container">
            <UserList listData={this.state.data} />
          </div>
        }
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
