import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer.cmp";
import WikipediaPreview from "../WikipediaPreview/WikipediaPreview.cmp";

const WikipediaContainer = () => {
  return (
    <div className="wikitube-container" style={{ width: "35%" }}>
      <VideoPlayer />
      <WikipediaPreview />
    </div>
  );
};

export default WikipediaContainer;
