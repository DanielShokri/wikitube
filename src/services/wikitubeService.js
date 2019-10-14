import axios from "axios";

const YOUTUBE_API = "AIzaSyDYdl0Xss7i4n05E450Uc7oNef1boWE_f8";

export default {
  fetchTopYoutubeVideos,
  fetchWikipediaTerm
};

async function fetchTopYoutubeVideos(query = "imagine dragons") {
  try {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YOUTUBE_API}&q=${query}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
}

async function fetchWikipediaTerm(term = "imagine dragons") {
  try {
    const res = await axios.get(
      `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${term}&limit=5`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
}
