import React, {createContext, useContext, useMemo, useState} from 'react';
import {post} from "../../types/post";

type valueType = {
    posts: Array<post>,
    setPosts: Function,
    deletePost: Function,
    updatePost: Function
}

const initStates: { posts: Array<post> } = {posts: []};

const PostsContext = createContext({} as valueType);

export const usePostsContext = () => useContext(PostsContext);

interface providerProps {
    children: [React.ReactNode] | React.ReactNode
}

const PostsContextProvider: React.FC<providerProps> = ({children}: providerProps) => {
    const [posts, setPosts] = useState<Array<post>>(initStates.posts);

    const updatePost: Function = (postId: number, post: post): void => {
        setPosts((prevPosts: Array<post>): Array<post> => {
            const updatedPostIndex: number = prevPosts.findIndex((post: post) => post.id === postId);
            if (updatedPostIndex === -1)
                return prevPosts;
            return [...prevPosts.slice(0, updatedPostIndex), {...post}, ...prevPosts.slice(updatedPostIndex + 1)]
        })
    }

    const deletePost: Function = (postId: number): void => {
        setPosts((prevPosts: Array<post>): Array<post> => {
            const postIndex = prevPosts.findIndex((post: post) => post.id === postId);
            prevPosts.splice(postIndex, 1)
            return [...prevPosts];
        })
    }

    const value: valueType = useMemo(
        () => ({posts, setPosts, updatePost, deletePost}),
        [posts]
    );

    return <>
        <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
    </>
}

export default PostsContextProvider;
