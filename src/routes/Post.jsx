import { useParams } from 'react-router-dom';
import './Post.css';
import { useEffect, useState } from 'react';
import { blogFetch } from '../axios/config';

export const Post = () => {
  const {id} = useParams();

  const [post, setPost] = useState({});

  const getPost = async () => {
    try {
      const res = await blogFetch.get(`/posts/${id}`);
      const data = await res.data;
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};
