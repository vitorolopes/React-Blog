import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({author, id, content, image, title}) => {

  return (
    <div className='card'>
      <div className="card-info">
        <div className="card-title">
          <Link to={`/posts/${id}`}>
             <p>{title}</p>
          </Link>
        </div>
        <div className="card-author">
          <p>{author}</p>
        </div>
      </div>
      <img className='card-image' src={image} alt="card" />
    </div>
  )
}

export default PostCard