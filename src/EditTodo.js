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

    const [Heading, setHeading] = useState(data.heading ? data.heading : "")
    const [Description, setDescription] = useState(data.description);

    return (
        <div className="edit_todo_parent">


            <div className="edit_todo_container">
                <p>heading</p>
                <input
                    type="text"
                    onChange={(e) => setHeading(e.target.value)}
                    value={Heading ? Heading : ""}
                >
                </input>
                <p>Description</p>
                <input
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={Description ? Description : ""}
                >
                </input>
                <br />
                <button
                    className='edit_save_bn'
                    onClick={() => {
                        let dataEdit = {
                            heading: Heading,
                            description: Description
                        }
                        fetch(`${API}/todo/edit/${id}`, {
                            method: "PUT", headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(dataEdit)
                        })
                            .then((res) => res.json())
                            .then((data) => navigate(`/todo/${data.username}`))
                    }}
                >Save</button>

            </div >
        </div>
    );
}
