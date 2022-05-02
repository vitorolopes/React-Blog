import React from 'react'
import {useGlobalContext} from '../context/context';
import PostCard from './PostCard';

const PostList = () => {

  const {blogPosts, loading} = useGlobalContext();
 // console.log(blogPosts);

 if(loading)  {<div>loading...</div>}

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