import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.description}</p>
      <Link to={`/post/${post.id}`}>Read more</Link>
    </div>
  );
};

export default PostItem;
