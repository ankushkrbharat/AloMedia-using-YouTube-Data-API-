import { useQuery } from "@tanstack/react-query";
import { ChartNoAxesColumn, ChartNoAxesCombined, Flame } from "lucide-react";
import { getTrendingVideos } from "~/api/requests";
import VideoCard from "~/components/VideoCard";

export default function LandingPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingVideos,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching videos</div>;

  return (
    <section className="w-full flex flex-col h-auto mx-auto px-16 gap-10 mt-6 justify-center items-center">
      <h1 className="flex gap-3 font-bold text-5xl">
        <span>
          <ChartNoAxesCombined size={50} color="blue" />
        </span>
        <span>Trending</span>
      </h1>
      <div className="flex flex-wrap gap-4 w-full">
        {data?.items?.map((video: any) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
