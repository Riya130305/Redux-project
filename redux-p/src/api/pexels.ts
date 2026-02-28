import axios from "axios";

const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
if (!PEXELS_KEY) {
  throw new Error("Pexels API key missing");
}
export const fetchVideos=axios.create({
    baseURL:"https://api.pexels.com",
    headers:{
        Authorization: PEXELS_KEY,
    },
});

// Typescript types for pexels response
export interface PexelsVideo{
    id:string;
    video_files:{
        file_type:string;
        link:string;
    }[],
    url:string;
}

// response
export interface PexelsVideoResponse{
    videos: PexelsVideo[];
}
