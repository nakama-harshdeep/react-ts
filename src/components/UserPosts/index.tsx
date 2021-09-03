import React, {useEffect} from 'react';
import {useFullPageLoaderContext} from "../../context/fullPageLoader";
import axios from "axios";
import {usePostsContext} from "../../context/Posts";
import PostItem from "../PostItem";
import {post} from "../../types/post";

// import './styles.scss';

interface propTypes {
}

const UserPosts: React.FC = (props: propTypes) => {

    const {posts, fetchPosts} = usePostsContext();

    useEffect(
        (): void => {
            fetchPosts();
        },
        []
    );

    return <>
        {
            posts.length ?
                posts.map((post: post): React.ReactNode => <PostItem key={post.id} {...post} />) :
                ""
        }
    </>
};

export default UserPosts
