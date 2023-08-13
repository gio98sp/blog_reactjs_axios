import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Admin.css';
import { blogFetch } from '../axios/config';

export const Admin = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await blogFetch.get('/posts');
      const data = await res.data;
      setPosts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="admin">
      <h1>Gerenciar Posts</h1>
      {posts.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <div className="actions">
              <Link className="btn edit-btn">Editar</Link>
              <button className="btn delete-btn">Excluir</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
