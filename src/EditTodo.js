import { useNavigate, useParams } from 'react-router-dom';
import './App.css';
import { API } from './global.js';
import { useEffect, useState } from 'react'

export function EditTodo() {

    const { id } = useParams();
    const [data, setData] = useState();
    const navigate = useNavigate();
    const [Heading, setHeading] = useState();
    const [Description, setDescription] = useState();

    useEffect(() => {
        fetch(`${API}/todo/edit/${id}`, { method: "GET" })
            .then((res) => res.json())
            .then((mu) => setData(mu))
    }, [])

    console.log(data ? data.username : "nothing");

    return (
        <div className="edit_todo_parent">
            <div className="edit_todo_container">
                <p>Heading</p>
                <input
                    className='input'
                    onChange={(e) => setHeading(e.target.value)}
                    value={Heading}
                    placeholder={Heading}
                >
                </input>
                <p>Description</p>
                <input
                    className='input'
                    onChange={(e) => setDescription(e.target.value)}
                    value={Description}
                    placeholder={Description}
                >
                </input>
                <br />
                <div className="btn_div">
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


                            navigate(`/todo/${data.username}`)
                        }}
                    >Save</button>
                    <button
                        className='edit_cancel_bn'
                        onClick={() => {

                            navigate(`/todo/${data.username}`)
                        }}
                    >Cancel</button>
                </div>
            </div >
        </div>
    );
}
