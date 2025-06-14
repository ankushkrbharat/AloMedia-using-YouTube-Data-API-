import React from "react";
import type { Route } from "./+types/search";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getSearchVideos } from "~/api/requests";
import VideoCard from "~/components/VideoCard";

export default function Search() {
  const [searchParams] = useSearchParams();
  const value = searchParams.get("value") ?? "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["search", value],
    queryFn: () => getSearchVideos(value),
    enabled: !!value, 
  });

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading videos.</div>;

  return (
    <section className="flex flex-col gap-5 mt-5 items-center justify-center ">
        <h1 className="text-5xl font-bold ">Results</h1>
    <div className="p-4 flex flex-wrap gap-4">

      {data.items.map((video: any) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </div>
    
    </section>
  );
}
