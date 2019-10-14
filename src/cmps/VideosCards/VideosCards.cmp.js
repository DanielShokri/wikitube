import React from "react";
import { connect } from "react-redux";
import { userSelectVideo } from "../../store/videos/videosActions";
import { Card, Button } from "react-bootstrap";
import "./videocards.styles.scss";

const VideosCards = ({
  item,
  videoSelected,
  selectedLight,
  selectedDark,
  selectedBlue
}) => {
  const themeColor = () => {
    if (selectedLight) return "white";
    if (selectedDark) return "dark";
    if (selectedBlue) return "primary";
  };
  return (
    <div>
      <Card
        bg={themeColor()}
        text={selectedDark || selectedBlue ? "white" : "dark"}
        style={{ width: "20rem" }}
        className="card"
      >
        <Card.Img variant="top" src={item.snippet.thumbnails.medium.url} />
        <Card.Body>
          <Card.Title>{item.snippet.title}</Card.Title>
          <Button
            onClick={() => videoSelected(item.id.videoId)}
            variant={selectedDark || selectedBlue ? "light" : "dark"}
          >
            Watch Video
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  videoSelected: id => dispatch(userSelectVideo(id))
});

const mapStateToProps = ({ themeReducer }) => ({
  selectedLight: themeReducer.lightTheme,
  selectedDark: themeReducer.darkTheme,
  selectedBlue: themeReducer.blueTheme
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosCards);
