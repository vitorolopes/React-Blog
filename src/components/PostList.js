import React from 'react'
import {useGlobalContext} from '../context/context';
import PostCard from './PostCard';

const PostList = () => {

  const {blogPosts} = useGlobalContext();
  console.log(blogPosts);

  return (
    <div className='posts'>
        <div className="posts-grid-container">
            {blogPosts.map((post, id)=> {
                return(
                    <PostCard key={id}
                              {...post}     
                    />
                )
            })}
        </div>
    </div>
  )
}

export default PostList