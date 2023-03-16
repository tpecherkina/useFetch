import { useEffect, useState } from "react";

const useJsonFetch = (url) => {
    const [data, setData] = useState('');
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
            try {
                fetch(url)
                .then(response => response.json())
                    .then(result => setData(result))
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }

    }, [url])

    return [data, loading, error];
}

export default useJsonFetch;