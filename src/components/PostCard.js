import React from 'react'

const PostCard = ({author, content, image, title}) => {

  return (
    <div className='card'>
      <div className="card-info">
        <div className="card-title">
          <p>{title}</p>
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