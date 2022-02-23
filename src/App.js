import React from "react";
import { GithubApi } from "./services";
import Repo from "./components/Repo";
import SearchForm from "./components/SearchForm";
import User from "./components/User";
import Button from "react-bootstrap/Button";
import "./App.css";
import Alert from "react-bootstrap/Alert";

class App extends React.Component {
  state = {
    users: null,
    repos: [],
  };

  setUser = (userName) => {
    Promise.all([
      GithubApi.fetchUser(userName),
      GithubApi.fetchUserRepos(userName),
    ])
      .then(([users, repos]) => this.setState({ users, repos }))
      .catch((error) => alert(error));
  };

  handleResetUser = () => {
    this.setState({ users: null });
  };

  render() {
    const { users, repos } = this.state;

    if (!users) {
      return (
        <div className="app">
          <SearchForm setUser={this.setUser} />
        </div>
      );
    }
    return (
      <div className="app">
        <User users={users} />
        <Repo repos={repos} />
        <Button
          variant="secondary"
          onClick={this.handleResetUser}
          type="submit"
          block
          className="mt-5"
          size="lm"
        >
          Back!
        </Button>
      </div>
    );
  }
}

export default App;
