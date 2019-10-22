import React, {useState, useEffect} from 'react'
import PostList from "./PostList/PostList";

const API_URL = `https://jsonplaceholder.typicode.com/posts`;

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }
    useEffect(() => {
        fetchUrl();
    }, []);
    return [data, loading];
}

function App() {
    const [data, loading] = useFetch(
        API_URL
    );
    const [count, setCount] = useState(10);
    const [searchValue, setSearchValue] = useState('');

    const filteredData = searchValue ? data.filter(({ title, body }) => (
        title.search(searchValue) !== -1 ||
        body.search(searchValue) !== -1
    )) : data;

    function onGetMorePosts(event) {
        event.preventDefault();
        let newCount = count + 10;
        if(newCount > filteredData.length){
            newCount = filteredData.length;
        }
        setCount(newCount);
    }

    function onChangeSearchValue(event) {
        event.preventDefault();
        setSearchValue(event.target.value);
    }

    const posts = filteredData.slice(0, count);
    const isVisibleMoreButton = count < filteredData.length;

    return (
            <PostList
                posts={posts}
                loading={loading}
                onGetMorePosts={onGetMorePosts}
                isVisibleMoreButton={isVisibleMoreButton}
                onChangeSearchValue={onChangeSearchValue}
                searchValue={searchValue}
            />

  );
}

export default App;
