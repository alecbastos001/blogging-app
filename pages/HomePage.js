import React, { useEffect, useState } from 'react';
import PostList from '../components/PostList';
import { fetchPosts } from '../services/api';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default HomePage;
