import { useEffect } from 'react'
import React from 'react'
import { fetchAlbums } from './albumsSlice'
import { useDispatch,useSelector } from 'react-redux'

//to interact with the store, import from react-redux hooks such as useSelector useDispatch assign returned results
// to a variable and send variable to the appropriate div. ex const userIds = useSelector(state=>state.album.userId) placed within
// the function body will automatically return the slice information.
//1 import useDispatch to dispatch the async function,
//2 import useEffect to fire the dispatch of the async fetchAlbums upon loading, empty array fires it only one time.
//3 now import useSelector to SUBSCRIBE to the state

function AlbumView() {

    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(fetchAlbums())
  },[dispatch])

    const album = useSelector((state)=>state.albums)
   //name of slice is albums

   
  return (

  //can use ternary operators here.  There are 3 possible outcomes: loading, error, and data received.  the operator
  // is condition ? tooccuriftrue : tooccuriffalse.  the && is a logical AND operator and makes it so that both expressions must be truthy for it to proceed as truthy.  Note how the albums.map has moved to here from the slice.
    <div>
        <h1>Album List</h1>
        {album.loading && <div>Loading...</div>}
        {!album.loading && album.error ? <div>Error: {album.error}</div>: null}
        {!album.loading && album.albums.length ? (
          <ul>
            {album.albums.map(ea=> (
              <li key={ea.id}>{`Provided by ${ea.userId}, entitled ${ea.title}`}</li>
            ))}
          </ul>
        ) :null }
       
    </div>   
  )
}

export default AlbumView