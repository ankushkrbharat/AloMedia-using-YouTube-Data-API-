import { useState, type EventHandler } from "react";
import type { Route } from "./+types/home";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AloMedia - Watch, Search, Discover" },
    {
      name: "description",
      content: "Search videos with AloMedia, a YouTube-like modern app.",
    },
  ];
}

export default function Home() {
  const [value,setvalue]=useState("");

  const Nav = useNavigate();

  function clickHandler(e: any) {
    e.preventDefault();
    Nav(`/search?value=${value}`)
  }
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <nav className="w-full px-6 py-4 shadow-sm flex items-center justify-between bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold tracking-tight text-blue-600">
          AloMedia
        </h1>
        <a
          href="/videos"
          className="text-sm text-gray-700 hover:text-blue-600 transition"
        >
          videos
        </a>
      </nav>
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-xl w-full text-center space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Search and Discover
          </h1>
          <h2 className="text-lg text-gray-500">
            Find trending and popular videos with AloMedia
          </h2>

          <form className="flex items-center w-full border border-gray-300 rounded-xl overflow-hidden">
            <input
            onChange={(e)=>setvalue(e.target.value)}
              type="text"
              placeholder="Search for videos..."
              className="flex-grow px-4 py-3 text-sm outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 transition"
              onClick={clickHandler}
            >
              Search
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
