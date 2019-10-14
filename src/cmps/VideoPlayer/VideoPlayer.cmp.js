import React from "react";
import { connect } from "react-redux";

const VideoPlayer = ({ videoId }) => {
  return (
    <div>
      <iframe
        title="video"
        width="420"
        height="315"
        src={`https://www.youtube.com/embed/${
          videoId ? videoId : "7wtfhZwyrcc"
        }`}
      ></iframe>
    </div>
  );
};

const mapStateToProps = ({ videosReducer }) => ({
  videoId: videosReducer.videoId
});

export default connect(mapStateToProps)(VideoPlayer);
