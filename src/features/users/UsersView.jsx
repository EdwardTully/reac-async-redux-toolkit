import React from 'react'
import { useEffect } from 'react'
import { fetchUsers } from './usersSlice'
import {useDispatch, useSelector} from 'react-redux'



function UsersView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const usersInfo = useSelector((state) => state.users);

  return (
    <div>
      <h2>User List</h2>
      {usersInfo.loading && <div>Loading...</div>}
      {!usersInfo.loading && usersInfo.error ? (
        <div>Error: {usersInfo.error}</div>
      ) : null}
      {!usersInfo.loading && usersInfo.users.length ? (
        <div id='usersCont'>
        <ul>
          {usersInfo.users.map((ea) => (
            <li
              key={ea.id}
            >{`${ea.name} can be reached by calling ${ea.phone} or by email at ${ea.email}`}</li>
          ))}
        </ul>
        </div>
      ) : null}
    </div>
  );
}

export default UsersView