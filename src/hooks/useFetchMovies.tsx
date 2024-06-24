import { useState, useEffect } from "react"; 
import { IMovie } from "../interfaces/Movie";


export function useFetchMovies(url: string, query: string | null, token: string) {
    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState<IMovie[]>([]); 

    useEffect(() => {
        const getAllData = async () => {
            let customUrl = url; 

            if(query) {
                customUrl = `${url}?query=${query}`
            }

            const response = await fetch(customUrl, {
                method: "GET", 
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${token}`
                }
            }); 
            const data = await response.json(); 
            setData(data.results);
            setLoading(false);  
        }
        getAllData(); 
    }, [url, query, token]); 

    return { loading, data }; 
}