import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UsersList';


function App() {
  const [userList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) =>{
   
   setUsersList((prevUsersList)=>{
       return [...prevUsersList, {name:uName, age:uAge, id:Math.random().toString()}];
   });
  };

  return (
    <div>
       <h1>Smiles</h1>
       <AddUser onAddUser={addUserHandler}/>
       <UserList users={userList}/>
    </div>
  );
}

export default App;
