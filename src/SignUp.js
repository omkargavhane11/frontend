import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global.js';
import { useEffect, useState } from 'react'

export function SignUp() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const getUserByUsername = () => {
        fetch(`${API}/users/${username}`, { method: "GET" })
            .then((res) => res.json())
            .then((mv) => setData(mv));
    }



    return (
        <div className="signup">
            <div className="signup_form">
                <h3>Sign up for your account</h3>
                <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} className="username input" placeholder="username" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email input" placeholder="email address" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password input" placeholder="password" />
                <p className="policy">By signup up, I accept the <span className="link">SuperService</span> Cloud Terms of Service and acknowledge the <span className="link">Privacy Policy</span></p>
                <button

                    className="btn"
                    onClick={() => {
                        let newUser = {
                            username: username,
                            email: email,
                            password: password
                        }

                        fetch(`${API}/users`, {
                            method: "POST",
                            body: JSON.stringify(newUser),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }).then((data) => data.json())
                            .then(() => navigate("/login"))


                    }
                    }
                >Sign Up</button>
                <hr className="hr"></hr>
                <p className="login_link_div">Already have an account ?<span onClick={() => navigate("/login")} className="login_link link">Login</span></p>
            </div>
        </div>
    );
}
