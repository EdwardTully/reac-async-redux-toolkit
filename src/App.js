
import './App.css';
import AlbumView from './features/albums/AlbumView';
import CompanyView from './features/companies/CompanyView';
import PostsView from './features/posts/PostsView';
import TodosView from './features/todos/TodosView';
import UsersView from './features/users/UsersView';


function App() {
  return (
    
    <div className="App">
      <h1>JSON Data, React, Redux-Toolkit</h1>
      <br></br>
      <CompanyView/>
      <UsersView/>
      <AlbumView/>
      <PostsView/>
      <TodosView/>
      

    </div>
  );
}

export default App;
