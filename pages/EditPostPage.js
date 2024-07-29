import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById, updatePost } from '../services/api';

const EditPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    fetchPostById(id).then(data => setPost(data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, post);
    // Redirect to home or show success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        placeholder="Content"
        value={post.content}
        onChange={e => setPost({ ...post, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={post.author}
        onChange={e => setPost({ ...post, author: e.target.value })}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditPostPage;
