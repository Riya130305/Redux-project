import axios from "axios";

const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
if (!PEXELS_KEY) {
  throw new Error("Pexels API key missing");
}
// API instance for fetching videos from pexels
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

// function to fetch videos from pexels
export const searchVidos = async(
    query:string,
    page: 1,
    per_page: 20,
): Promise<PexelsVideoResponse> => {
    const response = await fetchVideos.get<PexelsVideoResponse>
    ("/videos/search",
        {
            params:{
                query,
                page,
                per_page,
            }
        }
    );
    return response.data;
}
