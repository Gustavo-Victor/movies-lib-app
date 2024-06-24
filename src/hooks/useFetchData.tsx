import { useState, useEffect } from "react"; 
import { IMovie } from "../interfaces/Movie";


export function useFetchData(url: string) {
    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState<IMovie[]>([]); 

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url); 
            const data = await response.json(); 
            setData(data.results);
            setLoading(false);  
        }
        getData(); 
    }, [url]); 

    return { loading, data }; 
}