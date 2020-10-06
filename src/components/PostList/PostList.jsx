import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './PostList.scss';

import PostItem from '../PostItem/PostItem';
import { fetchPosts } from '../../redux/actions';

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);

    console.log(posts)

    return (
        <div className="post-list">
            {/* {
                posts.length && (
                    posts.map(post => (
                        <PostItem key={post.id} {...post} />
                    ))
                )
            } */}
        </div>
    )
}

export default PostList;