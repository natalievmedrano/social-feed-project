import React, { useState } from "react";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [post, newPost] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };

  const handleName = e => {
    setName(e.target.value);
  };

  const handlePost = e => {
    newPost(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
        <div>
      <label>Name</label>
      <input type="name" value={name} onChange={handleName} />
      </div>
      <div>
      <label>Post</label>
      <input type="post" value={post} onChange = {handlePost}/>
      <button type="post">POST</button>
      </div>
    </form>
  );
};

export default CreatePost;
