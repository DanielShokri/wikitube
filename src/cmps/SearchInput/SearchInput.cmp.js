import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import {
  handleUserInputYouTube,
  fetchWikipediaTerm
} from "../../store/videos/videosActions";
import { handleUserSearchTerm } from "../../store/user/userActions";

const SearchInput = ({
  setUserSearch,
  fetchWikipediaTerm,
  handleUserSearchTerm
}) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userInput);
    setUserSearch(userInput);
    fetchWikipediaTerm(userInput);
    handleUserSearchTerm({ term: userInput });
    setUserInput("");
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        onChange={e => setUserInput(e.target.value)}
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={userInput}
      />
      <Button onClick={handleSubmit} variant="outline-success">
        Search
      </Button>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  setUserSearch: input => dispatch(handleUserInputYouTube(input)),
  fetchWikipediaTerm: term => dispatch(fetchWikipediaTerm(term)),
  handleUserSearchTerm: term => dispatch(handleUserSearchTerm(term))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchInput);
