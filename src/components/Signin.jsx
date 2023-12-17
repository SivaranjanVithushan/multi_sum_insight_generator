import React, { useState } from "react";
import '../Styles/Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function Signin() {

    // let [passwordVisible, setPasswordVisible] = useState(false);
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');

    // function togglePasswordVisibility() {
    //     setPasswordVisible(!passwordVisible);
    // };


    function handleSubmit() {

        console.log('Email:', email);
        console.log('Password:', password);
    };

    const navigate = useNavigate();

    const routeChange = () => {
        let path = `/register`;
        navigate(path)
    }

    return (
        <div className="sign_container">
            <button className="sign_logo_btn">Logo</button>
            <div className="left-container">
                <h3 className="para_1">New here?</h3>
                <p className="para_2">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <button className="register_btn" onClick={routeChange}>REGISTER</button>
            </div>
            <div className="right-container">
                <h3 className="sign_in"> Sign In</h3>
                {/* <form> */}
                    <div className="form_container">
                        <div className="email_content">
                            <label htmlFor="email">Email</label>
                            <br />
                            <div className="icon_container">
                                <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
                                <input className="email_container" type="email" name="email" id="email" placeholder="Your email" onChange={(e)=>{setEmail(e.target.value)}} required />
                            </div>
                        </div>
                        <div className="password_content">
                            <label htmlFor="password">Password</label>
                            <br />
                            <div className="icon_container">
                                <FontAwesomeIcon icon={faLock} className="lock-icon" />
                                <input className="password_container"
                                    type='password'
                                    name="password"
                                    id="password"
                                    placeholder="Your password"
                                    onChange={(e)=>{setPassword(e.target.value)}}                                    // onChange={this.handlePasswordChange}
                                    required
                                />
                                {/* <FontAwesomeIcon
                                    icon={passwordVisible ? faEye : faEyeSlash}
                                    className="eye-icon"
                                    onClick={togglePasswordVisibility}
                                /> */}
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="submit_btn" onClick={handleSubmit}>SIGN IN</button>
                {/* </form> */}
            </div>
        </div>
    );
}


export default Signin;
