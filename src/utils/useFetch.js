import { useEffect, useState } from "react"
const useFetch = (url) => {
    const [apiData, setApiData] = useState(null);
    const fetchData = async() => {
        const resp = await fetch(url);
        const data = await resp.json();
        setApiData(data);
    }
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [url]);

    return apiData;
}
export default useFetch;