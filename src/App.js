import React, { useState } from "react";

import UsersList from "./components/AddUser/UsersList";
import UserInput from "./components/AddUser/UserInput";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() }
      ];
    });
  };

  // const deleteItemHandler = (userId) => {
  //   setUsers((prevUsers) => {
  //     const updatedUsers = prevUsers.filter((user) => user.id !== userId);
  //     return updatedUsers;
  //   });
  // };

  // let content = (
  //   <p style={{ textAlign: "center" }}>No Users found. Maybe add one?</p>
  // );

  // if (users.length > 0) {
  //   content = <UsersList users={users} onDeleteItem={deleteItemHandler} />;
  // }

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
