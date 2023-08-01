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


  return (
    <div>
        <h1>Posts by user</h1>
        {postData.loading && <div>Loading...</div>}
        {!postData.loading && postData.error ? <div>Error:{postData.error}</div> : null}
        {!postData.loading && postData.posts.length ? (
          <ul>
            {postData.posts.map(ea => (
              <li key= {ea.id}>{`Post number ${ea.id}, user responded with ${ea.body}`}</li>
            ))}
          </ul>
        ):null}
      
    </div>
  )
}

export default PostsView