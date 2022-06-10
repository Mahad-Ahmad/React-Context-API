import React, { useState, useEffect } from "react";
import useDocumentTitle from "./useDocumentTitle";
import axios from "axios";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  //   useDocumentTitle(`${name} Clicked ${count} times`);

  useEffect(() => {
    async function getUsers() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(result.data);
    }
    getUsers();
  });

  // name 10 times in a row usinh for loop

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        {name} has clicked {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>dcrement</button>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Counter;
