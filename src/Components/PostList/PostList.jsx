import React from "react";
const PostList = (props) => {
  const posts = props.posts.map(function (post) {
    return (
      <div>
        <h3>{post.name}</h3>
        <p>{post.post}</p>
      </div>
    );
  });
  return <div>{posts}</div>;
};

export default PostList;
