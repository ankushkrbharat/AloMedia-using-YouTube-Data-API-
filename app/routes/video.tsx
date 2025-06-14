import React from "react";
import type { Route } from "./+types/video";
import { useQuery } from "@tanstack/react-query";
import { getVideo } from "~/api/requests";

export default function Video({ params }: Route.ComponentProps) {
  const Id = params.id;

  const { data, isLoading, error } = useQuery({
    queryKey: ["video", Id],
    queryFn: () => getVideo(Id),
    enabled: !!Id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !data || data.items.length === 0)
    return <div>Error fetching video</div>;

  const video = data.items[0];
  const { snippet, statistics } = video;

  const title = snippet?.title;
  const channel = snippet?.channelTitle;
  const views = statistics?.viewCount;

  return (
    <div className="p-4 flex flex-col  justify-center space-y-4">
      <div className="aspect-video w-full  max-w-4xl mx-auto">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${Id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col  mx-auto justify-start items-start">
        <h1 className="text-xl w-full font-bold">{title}</h1>
        <p className="text-sm w-full text-gray-400 font-bold ">{channel}</p>
        <p className="text-sm w-full text-gray-500">{views} views</p>
      </div>
    </div>
  );
}
