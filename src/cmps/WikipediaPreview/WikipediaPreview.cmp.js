import React from "react";
import { connect } from "react-redux";

const WikipediaPreview = ({ wikipediaTerm }) => {
  return (
    <div className="wikipedia-term">
      {wikipediaTerm.length && (
        <>
          <h1>{wikipediaTerm[1].splice(0, 1)}</h1>
          <p>{wikipediaTerm[2].splice(0, 1)}</p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ videosReducer }) => ({
  wikipediaTerm: videosReducer.wikipediaTerm
});

export default connect(mapStateToProps)(WikipediaPreview);
