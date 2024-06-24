import { useState, useEffect } from "react";
import { IMovieDetails } from "../interfaces/Movie";

export function useFetchMovie(url: string, id: string | undefined, token: string) {
    const [data, setData] = useState<IMovieDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMovieById = async () => {
            const customUrl = `${url}${id}`; 
            const response = await fetch(`${customUrl}`, {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        getMovieById(); 

    }, [id, token, url]); 

    return { data, loading };
}