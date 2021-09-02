import React from 'react';
import './App.css';
import UserPosts from "./components/UserPosts";
import PostsContextProvider from "./context/Posts";

function App() {
    return (
        <div className="App">
            <PostsContextProvider>
                <UserPosts/>
            </PostsContextProvider>
        </div>
    );
}

export default App;
