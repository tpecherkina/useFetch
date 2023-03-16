import useJsonFetch from '../hooks/useJsonFetch';

const Loading = () => {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/loading');

    return (
        <div className="Loading">
            Loading result:
            <div className="Result">
                {loading && 'Loading...'}
                {data && data.status}
            </div>
        </div>
    );
};

export default Loading;