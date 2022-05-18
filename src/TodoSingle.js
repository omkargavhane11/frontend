import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { API } from './global.js';

export function TodoSingle({ todo, setData, data }) {
    const { username } = useParams();
    const navigate = useNavigate();
    // const [todo, setTodo] = useState([]);

    // useEffect(() => {
    //     fetch(`${API}/todo/${username}`)
    //         .then((res) => res.json())
    //         .then((data) => setTodo(data));
    // }, [])





    return (
        <div className="single_todo">
            <p className="todo_heading">{todo ? todo.heading : ""}</p>
            <div className="todo_description">{todo ? todo.description : ""}</div>
            <div>
                <button
                    onClick={() => {
                        navigate(`/todo/edit/${todo._id}`);
                        console.log(todo);
                    }}
                    className="todo_edit_button">Edit
                </button>

                {/* <button onClick={() => {
                let temp = data;
                let result = temp.filter((m) => m.id !== id);
                setData(result);
            }} className="todo_delete_btn">Delete
            </button> */}

                <button onClick={() => {
                    fetch(`${API}/todo/edit/${todo._id}`, { method: "DELETE" }).then(() => navigate(`/todo/${username}`))
                    // console.log(todo._id);
                }} className="todo_delete_btn">Delete
                </button>

                {/* <button onClick={() => {
                console.log(todo._id);
            }} className="todo_delete_btn">Delete
            </button> */}

            </div>
        </div>
    );
}
