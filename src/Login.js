import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global.js';
import { useEffect, useState } from 'react'

export function Login() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // useEffect(() => {
    //     fetch(`${API}/users`)
    //         .then((res) => res.json())
    //         .then((mv) => setData(mv));
    // }, [])

    return (
        <div className="signup">
            <div className="signup_form">
                <h3>Login to your account</h3>
                <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="username input" placeholder="Enter your username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password input" placeholder="Enter your password" />
                <button
                    className="btn"
                    onClick={() => {
                        fetch(`${API}/users/${username}`, { method: "GET" })
                            .then((res) => res.json())
                            .then((mv) => {
                                if (mv[0].username === username && mv[0].password === password) {
                                    navigate(`/todo/${username}`)
                                } else {
                                    return alert('invalid credentials')
                                }
                            });
                    }}
                >Login</button>
            </div>

        </div>
    );
}
