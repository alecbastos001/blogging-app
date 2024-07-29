const API_URL = 'http://localhost:3000/api'; // Adjust this URL according to your backend configuration

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`);
  return response.json();
};

export const createPost = async (post) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const updatePost = async (id, post) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  return response.json();
};

export const deletePost = async (id) => {
  await fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });
};
