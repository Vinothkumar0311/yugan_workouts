import React, { useEffect, useState } from "react";
import "./App.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table className="tableCSS">
        <tr>
          {/* <th>User ID</th> */}
          <th>Image</th>
          <th>Age</th>
          <th>FirstName</th>
          <th>User Name</th>
          <th>Email</th>          
          <th>Phone</th>
          <th>Blood Group</th>
          <th>Date of Brith</th>
        </tr>
        <tbody className="tableCSS">
          {users.map((item, i) => (
            <tr>
              <td className="tableImage">
                <img src={item.image} alt={item.firstName} />
              </td>
              <td>{item.age}</td>
              <td>{item.firstName}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.bloodGroup}</td>
              <td>{item.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
