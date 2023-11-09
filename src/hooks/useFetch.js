import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
        } catch (error) {
            console.log("ERror", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    return { data };
}
export default useFetch;
