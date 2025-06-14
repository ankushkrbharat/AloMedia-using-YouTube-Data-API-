import { type RouteConfig, index, route } from "@react-router/dev/routes";
// import * from './components/LandingPage'
export default [
  index("routes/home.tsx"),
  route("videos", "./components/LandingPage.tsx"),
  route("videos/:id","routes/video.tsx"),
  route("search","routes/search.tsx")
] satisfies RouteConfig;
