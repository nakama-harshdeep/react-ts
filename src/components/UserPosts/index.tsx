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

    const {setIsLoader} = useFullPageLoaderContext();
    const {posts, setPosts} = usePostsContext();

    useEffect(
        (): void => {
            fetchPosts();
        },
        []
    );

    const fetchPosts: Function = async (): Promise<void> => {
        setIsLoader(true);
        const {data} = await axios({method: "GET", url: "https://jsonplaceholder.typicode.com/posts"})
        setPosts(data);
        setIsLoader(false);
    }

    return <>
        {
            posts.length ?
                posts.map((post: post): React.ReactNode => <PostItem key={post.id} {...post} />) :
                ""
        }
    </>
};

export default UserPosts
