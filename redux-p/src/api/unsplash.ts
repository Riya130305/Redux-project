import axios from "axios";

const UNSLASH_KEY = import.meta.env.VITE_UNSLASH_KEY;

// API instaonce for fetching photos from unsplash

export const fetchPhoto=axios.create({
    baseURL:"https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${UNSLASH_KEY}`,
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
