import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global.js';
import { useEffect, useState } from 'react'

export function EditTodo() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/todo/edit/${id}`, { method: "GET" })
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [])

    const [heading, setHeading] = useState(data.heading);
    const [description, setDescription] = useState(data.description);

    console.log(data);
    return (
        <div className="edit_todo_container">
            <p>heading</p>
            <input
                type="text"
                value={heading ? heading : ""}
                placeholder={heading ? heading : ""}
                onChange={(e) => setHeading(e.target.value)}
            >
            </input>
            <p>Description</p>
            <input
                type="text"
                value={description ? description : ""}
                placeholder={description ? description : ""}
                onChange={(e) => setDescription(e.target.value)}
            >
            </input>
            <button
                onClick={() => {
                    fetch(`${API}/todo/edit/${id}`, { method: "PUT" })
                        .then((res) => res.json())
                        .then((data) => navigate("/todo/omkar"))
                }}
            >Save</button>

        </div>
    );
}
