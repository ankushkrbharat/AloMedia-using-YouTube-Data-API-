import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function getTrendingVideos() {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/videos",
    {
      params: {
        part: "snippet,statistics,contentDetails",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        key: API_KEY,
      },
    }
  );

  return response.data;
}

export async function getVideo(id: string) {
  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/videos",
    {
      params: {
        part: "snippet,statistics,contentDetails",
        id: id,
        key: API_KEY,
      },
    }
  );

  return response.data;
}

export async function getSearchVideos(value: string | null) {
  if (!value || value.trim() === "") {
    throw new Error("Search query is missing.");
  }

  const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: value,
      type: "video",
      key: API_KEY,
    },
  });

  return response.data;
}