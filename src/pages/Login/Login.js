import React, { useEffect, useState } from 'react';
import './Login.css'
import Button from '../../components/button/button';
import Img from '../../components/img/img';
import Input from '../../components/input/input';
import loginData from '../../data/credentials.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleLogin = () => {
        if (userName.trim() === '') {
            setUsernameErrorMessage("Username cannot be empty");
        } else {
            setUsernameErrorMessage("");
        }
    
        if (password.trim() === '') {
            setPasswordErrorMessage("Password cannot be empty");
        }
        
        if (userName.trim() === '' || password.trim() === '' || passwordErrorMessage !== '') {
            return;
        }
    
        if (loginData.userName === userName) {
            if (loginData.password === password) {
                toast.success('Success');
                navigate("/login");
            } else {
                toast.error('Wrong password!');
            }
        } else {
            toast.error('Wrong username!');
        }
    }
    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;

        if (newUsername.trim() === '') {
            setUsernameErrorMessage('Username cannot be empty');
        } else {
            setUsernameErrorMessage('');
        }

        setUserName(newUsername);
    };
    const handlePasswordChange = (event) => {
        const password = event.target.value;
        if (password.trim() == "") {
            setPasswordErrorMessage('');
        }
        else {

            // Parola, harf, rakam ve özel karakter içermelidir.
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

            if (passwordRegex.test(password)) {
                setPassword(password);
                setPasswordErrorMessage('');
            } else {
                setPassword(password);
                setPasswordErrorMessage('Wrong combination');
            }
        }

    };

    return (
        <div className="d-flex-column">
            <ToastContainer />
            <section className="container d-flex-column">
                <Img src="./assets/cart-icon.svg" alt="Luxolis" />
                <section className="form-section">
                    <div className="input-container">
                        <Img src="./assets/user-icon.svg" alt="Username" />
                        <Input className={"input"} type={"text"} name="userName" placeholder={"Username"} onChange={handleUsernameChange} />
                    </div>
                    {usernameErrorMessage && <div className='error-message'>{usernameErrorMessage}</div>}
                    <div className="input-container">
                        <Img src="./assets/lock-icon.svg" alt="Password" />
                        <Input className={"input"} type={"password"} name="password" placeholder={"Password"} onChange={handlePasswordChange} />

                    </div>
                    {passwordErrorMessage && <div className='error-message'>{passwordErrorMessage}</div>}
                    <Button className={"login-button"} text={"Login"} handleClick={handleLogin} />
                    <p>Forgot password?</p>
                </section>
            </section>
        </div>
    );
}

export default LoginPage;
