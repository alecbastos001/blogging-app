import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../services/api';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link to={`/edit/${post.id}`}>Edit</Link>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPage;
