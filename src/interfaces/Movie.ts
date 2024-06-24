export interface IMovie {
    id: number; 
    title: string; 
    original_language: string;     
    overview: string; 
    poster_path: string; 
    backdrop_path?: string;
    release_date: string;  
    popularity: number; 
    video: boolean; 
    vote_average: number; 
    vote_count: number; 
    adult?: boolean; 
    original_title?: string;
    genre_ids?: number[]; 
}

export interface IMovieDetails extends IMovie {
    budget: number; 
    revenue: number; 
    runtime: number; 
    tagline: string;
}