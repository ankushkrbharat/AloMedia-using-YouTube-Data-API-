import React from "react";
import { Navigate, useNavigate } from "react-router";

interface VideoCardProps {
  video: any; // Ideally, define a type here for better TS support
}

export default function VideoCard({ video }: VideoCardProps) {
  const { snippet, statistics, id } = video;
  const thumbnail = snippet?.thumbnails?.medium?.url;
  const title = snippet?.title;
  const channel = snippet?.channelTitle;
  const views = statistics?.viewCount;
    const Nav=useNavigate();
    const videoId = typeof id === "string" ? id : id?.videoId;
  function clickHandler(){
    Nav(`/videos/${videoId}`);
  }

  return (
    <div onClick={clickHandler}  className="flex flex-col  min-w-[300px] max-w-[305px] rounded-xl shadow hover:shadow-lg transition py-2 px-5">
      <img src={thumbnail} alt={title} className="rounded-lg w-full h-auto" />
      <div className="mt-2">
        <h2 className="text-sm font-semibold line-clamp-2">{title}</h2>
        <p className="text-xs text-gray-500">{channel}</p>
        <p className="text-xs text-gray-400">{views} views</p>
      </div>
    </div>
  );
}
