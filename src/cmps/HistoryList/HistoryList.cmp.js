import React from "react";
import { connect } from "react-redux";
import "./historylist.styes.scss";
import HistoryPreview from "../HistoryPreview/HistoryPreview.cmp";

const HistoryList = ({ userSearches }) => {
  return (
    <div className="history-container">
      <h2>Last search's:</h2>
      <div className="last-search">
        {userSearches ? (
          userSearches.searchTerms
            .reverse()
            .filter((item, idx) => idx < 3)
            .map(search => (
              <HistoryPreview term={search.term} key={search._id} />
            ))
        ) : (
          <h4>To watch your history searches please login</h4>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  userSearches: userReducer.currentUser
});

export default connect(mapStateToProps)(HistoryList);
