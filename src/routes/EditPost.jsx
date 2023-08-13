import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './EditPost.css';
import { blogFetch } from '../axios/config';

export const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const getPost = async () => {
    try {
      const res = await blogFetch.get(`/posts/${id}`);
      const data = await res.data;
      setTitle(data.title);
      setBody(data.body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  });

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title,
        body,
        userId: id,
      };
      await blogFetch.put(`/posts/${id}`, {
        body: newPost,
      });
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-post">
      <h2>Editando: {title}</h2>
      <form onSubmit={(e) => sendPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            value={title}
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea
            value={body}
            name="body"
            id="body"
            placeholder="Digite o conteúdo"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Editar Post" className="btn" />
      </form>
    </div>
  );
};
