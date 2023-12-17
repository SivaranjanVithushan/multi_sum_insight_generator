import React, { useState } from "react";
import '../Styles/Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faLock, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Register() {

    let [passwordVisible, setPasswordVisible] = useState(false);
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');

    function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible);
    };

    function handleSubmit() {
        console.log('Name:', name);
        console.log('Email:', email);
    };

    return (
        <div className="reg_container">
            <button className="sign_logo_btn">Logo</button>
            <div className="left_reg-container">
                <h3 className="welcome">Welcome Back!</h3>
                <p className="welcome_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <button className="signin_btn"><a href="/signin">SIGN IN</a></button>
            </div>
            <div className="right_reg-container">
                <h3 className="create_account"> Create an Account</h3>
                <form>
                    <div className="register_container">
                        <div className="username_content">
                            <label htmlFor="username">User name</label>
                            <br />
                            <div className="icon_container">
                                <input
                                    className="username_container"
                                    type="text" name="username"
                                    id="username"
                                    placeholder="Your user name" 
                                    value={name} 
                                    onChange={(e) => { setName(e.target.value) }} 
                                    required />
                            </div>
                        </div>
                        <div className="email_content">
                            <label htmlFor="email">Email</label>
                            <br />
                            <div className="icon_container">
                                <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                                <input className="email_container" type="email" name="email" id="email" placeholder="Your email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="password_content">
                            <label htmlFor="password">Password</label>
                            <br />
                            <div className="icon_container">
                                <FontAwesomeIcon icon={faLock} className="lock-icon" />
                                <input className="password_container"
                                    type={passwordVisible ? 'text' : 'password'}
                                    name="password"
                                    id="password"
                                    placeholder="Your password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    required
                                />
                                <FontAwesomeIcon
                                    icon={passwordVisible ? faEye : faEyeSlash}
                                    className="eye-icons"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                        </div>
                        <div className="cpassword_content">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <br />
                            <div className="icon_container">
                                <FontAwesomeIcon icon={faLock} className="lock-icon" />
                                <input
                                    className="cpassword_container"
                                    type={passwordVisible ? 'text' : 'password'}
                                    name="cpassword"
                                    id="cpassword"
                                    placeholder="Re-enter your password"
                                    value={confirmPassword}
                                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                                    required />
                                <FontAwesomeIcon
                                    icon={passwordVisible ? faEye : faEyeSlash}
                                    className="eye-icons"
                                    onClick={togglePasswordVisibility}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="reg_btn" onClick={handleSubmit}>REGISTER</button>
                </form>
            </div>
        </div>
    );
}

export default Register;