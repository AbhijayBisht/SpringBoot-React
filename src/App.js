import { useEffect, useState } from 'react';
import api from './api/apiConfig';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import UserCrud from "./component/UserCrud";


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const result = await api("/viewAll");
      setUsers(result.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  return (
    <div className="App">
      <h1 className="text-center">List Of Publisher</h1>
      <UserCrud load={load} users={users} />
    </div>
  );
}

export default App;
