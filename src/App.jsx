import React, { useState } from "react";
import CreatePost from "./Components/CreatePost/CreatePostForm";
import PostList from "./Components/PostList/PostList";
//import NavBar from './Components/NavBar/NavBar'

function App() {
  const [posts, setPosts] = useState([
    {
      name: "natalie medrano",
      post: "hello world!",
    },
  ]);

  const [newPosts , setNewPosts] = useState ([
    {
        name: <input type="" />,
        post: <input type=" " />
    }
  ]);

  return (
    < section id='posts'>
      <CreatePost newPosts={newPosts} />
      <PostList posts={posts} />
      </section>

   
  );
  
}

export default App;
