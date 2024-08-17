import React from 'react';

const UserList = ({ users, editEmployee, deleteEmployee }) => {
  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Options</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => editEmployee(user)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger mx-2"
                onClick={() => deleteEmployee(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;