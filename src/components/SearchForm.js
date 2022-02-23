import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class SearchForm extends React.Component {
  state = { userName: "" };

  handleUserChange = (event) => {
    const userName = event.target.value;
    this.setState({ userName });
  };

  handleUserSelected = (event) => {
    event.preventDefault();

    const { userName } = this.state;
    const { setUser } = this.props;
    setUser(userName);
  };

  render() {
    const { userName } = this.state;

    return (
      <Form onSubmit={this.handleUserSelected}>
        <Form.Label>GitHub username:</Form.Label>
        <FormControl
          type="text"
          // size=""
          placeholder="e.g. facebook"
          onChange={this.handleUserChange}
          value={userName}
          autoFocus
        />
        <Button
          variant="secondary"
          size="lm"
          onClick={this.handleUserSelected}
          type="submit"
          block
          className="mt-5"
        >
          GO!
        </Button>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  setUser: PropTypes.func,
};
