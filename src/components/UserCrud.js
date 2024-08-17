import { useState } from "react";
import api from "../api/userService";
import UserList from "./UserList";

const UserCrud = ({ load, users }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  
    async function save(event) {
      event.preventDefault();
      try {
        await api("/add", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
          }),
        });
        alert("Record Saved");
        // reset state
        setId("");
        setName("");
        setEmail("");
        setPhone("");
        load();
      } catch (error) {
        alert("Failed to save record.");
      }
    }
  
    async function editEmployee(user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setId(user.id);
    }
  
    async function deleteEmployee(id) {
      try {
        await api('${id}' , {
          method: 'DELETE',
        });
        alert("Details deleted successfully");
        load();
      } catch (error) {
        alert("Failed to delete details.");
      }
    }
  
    async function update(event) {
      event.preventDefault();
      if (!id) return alert("Details not found");
      try {
        await api("/update", {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
            name: name,
            email: email,
            phone: phone,
          }),
        });
        alert("Details updated");
        // reset state
        setId("");
        setName("");
        setEmail("");
        setPhone("");
        load();
      } catch (error) {
        alert("Failed to update details.");
      }
    }
  
    return (
      <div className="container mt-4">
        <form>
          <div className="form-group my-2">
            <input
              type="text"
              className="form-control"
              hidden
              value={id}
              onChange={e => setId(e.target.value)}
            />
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
  
          <div className="form-group mb-2">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
  
          <div className="row">
            <div className="col-4">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                placeholder="Phone Post(s)"
                onChange={e => setPhone(e.target.value)}
              />
            </div>
          </div>
  
          <div>
            <button className="btn btn-primary m-4" onClick={save}>
              Register
            </button>
            <button className="btn btn-warning m-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
        <UserList
          users={users}
          editEmployee={editEmployee}
          deleteEmployee={deleteEmployee}
        />
      </div>
    );


};

export default UserCrud;