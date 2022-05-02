import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useGlobalContext} from '../context/context';

const Post = () => {

  let {postId} = useParams()  
  
  const {currentBlogPost, getPostById, loading} = useGlobalContext();
  
  const post =  ( 
      currentBlogPost ? 
      (
        <div className='post'>
            <div className="post-image">
                <img src={currentBlogPost.image} alt="imag" />
            </div>

            <div className="post-content">
                <h2>{currentBlogPost.title}</h2>
                <p>{currentBlogPost.content}</p>
            </div>   
        </div>
      )
      :
      " "
  )

  useEffect(() => {
    getPostById(postId)
  }, [])

  if (loading){
     return <div>loading...</div>
  }

  return(
      post
  )
}

export default Post