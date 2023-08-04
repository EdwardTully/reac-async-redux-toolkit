import React from 'react'
import { useEffect } from 'react'
import { fetchPosts } from './postsSlice'
import { useDispatch, useSelector } from 'react-redux'


function PostsView() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch])

  const postData = useSelector(state=>state.posts)

  const userIdtoInclude = 1
 
  const postDatafilt = postData.posts.filter((post)=>{
    if(post.userId===userIdtoInclude){
      return post
    }
  })

  


  return (
    <div id='postView'>
        <h2>Posts by User {userIdtoInclude}</h2>
        {postData.loading && <div>Loading...</div>}
        {!postData.loading && postData.error ? <div>Error:{postData.error}</div> : null}
        {!postData.loading && postData.posts.length ? (
          <div id='postCont'>
          <ul>
          {postDatafilt.map((ea) => (
              <li key= {ea.id}>{`Post number ${ea.id}: ${ea.title}`}</li>
             
            ))}
          </ul>
          </div>
        ):null}
      
    </div>
  )
}

export default PostsView