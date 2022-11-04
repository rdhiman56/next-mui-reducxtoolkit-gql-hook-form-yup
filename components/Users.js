import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

export default function Users() {
  const [name, setName] = useState("");
  //const [users, setUsers] = useState([]);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // const addNewUser = () => {
  //    setUsers([...users, name])
  // }

  const addNewUser = () => {
    dispatch(addUser(name));
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <label>New User:</label>
      <input type="text" value={name} onChange={handleChange} />
      <button type="button" onClick={addNewUser}>
        Add
      </button>
      <h4>User List</h4>
      {console.log("users", users)}
      <ol>
        {users.map((user) => {
          return <li>{user}</li>;
        })}
      </ol>
    </div>
  );
}
