import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API } from './global.js';

export function AddTodo() {

    const navigate = useNavigate();
    const { username } = useParams();
    const [heading, setHeading] = useState();
    const [description, setDescription] = useState();

    return (
        <div className="Add_todo_container">
            <p>Heading</p>
            <input type="text" required className="input" value={heading} onChange={(e) => setHeading(e.target.value)}></input>
            <p>Description</p>
            <input type="text" required className="input description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <button
                className="btn"
                onClick={() => {
                    let newTodo = {
                        username: username,
                        heading: heading,
                        description: description
                    }
                    fetch(`${API}/todo`, {
                        method: "POST",
                        body: JSON.stringify(newTodo),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }).then(navigate(`/todo/${username}`))


                }}
            >Save</button>

        </div>
    );
}
