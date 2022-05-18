import './App.css';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Login } from './Login';
import { SignUp } from './SignUp';
import { EditTodo } from './EditTodo';
import { Todos } from './Todos';
import { TodoSingle } from './TodoSingle';
import { API } from './global.js';
import { AddTodo } from './AddTodo';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${API}/todo`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<TodoSingle />} />
        <Route path="/todo/:username" element={<Todos />} />
        <Route path="/todo/edit/:id" element={<EditTodo />} />
        <Route path="/todo/addtodo/:username" element={<AddTodo />} />
      </Routes>

    </div>
  );
}

export default App;



