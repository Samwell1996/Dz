import React from 'react'
import Loader from "../Loader/Loader";
import './PostList.css'
import PostListItem from '../PostListItem/PostListItem'
import MoreButton from '../MoreButton/MoreButton'
import Input from '../Input/Input'


function PostList({loading, posts, onGetMorePosts, isVisibleMoreButton, onChangeSearchValue, searchValue}) {

    return (
        <div className='Post-header'>
            {loading ? (
                <Loader/>
            ) : (
                <div>
                    <Input
                        onChange={onChangeSearchValue}
                        value={searchValue}
                    />
                    <h1 className='Post'>PostList</h1>
                    <ul>
                    {posts.map(({ id, title, body }) => (
                    <PostListItem id={id} key={id} title={title} body={body}/>
                    ))}
                    </ul>
                    <MoreButton onClick={onGetMorePosts} isVisibleMoreButton={isVisibleMoreButton}/>
                </div>
            )}
        </div>
    );
}
export default PostList;




