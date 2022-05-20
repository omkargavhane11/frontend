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
    function getUserByUsername() {
        fetch(`${API}/users/${username}`, { method: "GET" })
            .then((res) => res.json())
            .then((mv) => setData(mv));
    }

    const [loginAlert, setLoginAlert] = useState(false);
    const loginStyles = {
        display: loginAlert ? "block" : "none"
    }

    return (
        <div className="signup">
            <div className="signup_form">
                <h3>Login to your account</h3>
                <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="username input" placeholder="Enter your username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password input" placeholder="Enter your password" />
                <p className="loginAlert" style={loginStyles}>Invalid Credentials !</p>
                <button
                    className="btn"
                    onClick={() => {
                        getUserByUsername()

                        if (data[0].username === username && data[0].password === password) {
                            setLoginAlert(false)
                            navigate(`/todo/${username}`)
                        } else {
                            setLoginAlert(true)
                        }
                    }}
                >Login</button>
            </div>

        </div>
    );
}
