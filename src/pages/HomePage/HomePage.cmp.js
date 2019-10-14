import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchWikipediaTerm,
  handleUserInputYouTube
} from "../../store/videos/videosActions";
import VideosCards from "../../cmps/VideosCards/VideosCards.cmp";
import WikipediaContainer from "../../cmps/WikipediaContainer/WikipediaContainer.cmp";

import "./homepage.styles.scss";
import HistoryList from "../../cmps/HistoryList/HistoryList.cmp";

const HomePage = ({ videos, fetchVideo, fetchWikipediaTerm }) => {
  useEffect(() => {
    fetchVideo();
    fetchWikipediaTerm();
  }, [fetchVideo, fetchWikipediaTerm]);

  return (
    <div>
      <div className="home-page container">
        <div className="cards-container">
          {videos.items ? (
            videos.items.map(item => (
              <VideosCards item={item} key={item.id.videoId} />
            ))
          ) : (
            <p>No Search!</p>
          )}
        </div>
        <WikipediaContainer />
      </div>
      <div className="history-container container">
        <HistoryList />
      </div>
    </div>
  );
};

const mapStateToProps = ({ videosReducer, themeReducer }) => ({
  videos: videosReducer.videos
});

const mapDispatchToProps = dispatch => ({
  fetchVideo: () => dispatch(fetchWikipediaTerm()),
  fetchWikipediaTerm: () => dispatch(handleUserInputYouTube())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
