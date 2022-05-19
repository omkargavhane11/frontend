import { useNavigate, useParams } from 'react-router-dom';
import { TodoSingle } from "./TodoSingle";
import { API } from './global.js';
import { useEffect, useState } from 'react'


export function Todos() {
    const { username } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`${API}/todo/${username}`, { method: "GET" })
            .then((res) => res.json())
            .then((mv) => setData(mv))
    }, [data])

    // useEffect(() => {
    //     fetch(`${API}/todo/${username}`)
    //         .then((res) => res.json())
    //         .then((m) => setFilter(m))
    // }, [])

    // console.log(window.location);

    return (
        <div className="todo_list_page">
            <div className="add_btn_div">
                <button className="add_btn" onClick={() => navigate(`/todo/addtodo/${username}`)}>Add New Todo</button>
            </div>
            <div className="parent_div">
                <div className="todo_multiples">
                    {data.length < 1 ? "No data..." : data.map((m, index) => <TodoSingle key={index} id={m.id} todo={m} />)}
                </div>
            </div>
            {/* <h1>{username}</h1> */}
        </div>
    );
}
