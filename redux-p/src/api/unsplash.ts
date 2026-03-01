import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

// API instaonce for fetching photos from unsplash

export const fetchPhoto=axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
   },
})

// Typescript types for unsplash response

export interface UnsplashPhoto{
    id:string;
    urls:{
        small:string;
    }
    alt_description : string | null;
}
//response
export interface UnsplashPhotoResponse{
    results: UnsplashPhoto[];
}

// funtion to fetch photos from unsplash
export const searchImages = async(
    query:string,
    page: number,
    per_page: number,
): Promise<UnsplashPhotoResponse> => {
    const response =await fetchPhoto.get<UnsplashPhotoResponse>
    ("/search/photos",
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
