// import React, { useState } from "react";
// import '../Styles/Signin.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from "react-router-dom";
// import logo from '../img/logo.png';

// function Signin() {

//     // let [passwordVisible, setPasswordVisible] = useState(false);
//     let [password, setPassword] = useState('');
//     let [email, setEmail] = useState('');

//     // function togglePasswordVisibility() {
//     //     setPasswordVisible(!passwordVisible);
//     // };


//     function handleSubmit() {
//         console.log('Email:', email);
//         console.log('Password:', password);
//     };

//     const navigate = useNavigate();

//     const routeChange = () => {
//         let path = `/register`;
//         navigate(path)
//     }

//     return (
//         <div className="sign_container">
//             <div className="left-container">
//                 <div className="logo_container">
//                     <img src={logo} alt="logo" className="logo" />
//                 </div>
//                 <h3 className="para_1">New here?</h3>
//                 <p className="para_2">Sign up and discover a great amount of new opportunities!</p>
//                 <button className="register_btn" onClick={routeChange}>SIGN UP</button>
//             </div>
//             <div className="right-container">
//                 <h3 className="sign_in"> Sign In</h3>
//                 {/* <form> */}
//                 <div className="form_container">
//                     <div className="input_container">
//                         <label htmlFor="email"> 
//                             <FontAwesomeIcon icon={faEnvelope} className="icon" />
//                         </label>

//                         <input
//                             type="email"
//                             name="email"
//                             id="email"
//                             placeholder="Your email"
//                             onChange={(e) => { setEmail(e.target.value) }}
//                             required
//                         />
//                         {/* <div className="icon_container">
//                             <FontAwesomeIcon icon={faEnvelope} className="envelope-icon" />
//                             <input className="email_container" type="email" name="email" id="email" placeholder="Your email" onChange={(e) => { setEmail(e.target.value) }} required />
//                         </div> */}
//                     </div>

//                     <div className="input_container">
//                         <label htmlFor="password">
//                             <FontAwesomeIcon icon={faLock} className="icon" />
//                         </label>
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             placeholder="Your password"
//                             onChange={(e) => { setPassword(e.target.value) }}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <button type="submit" className="submit_btn" onClick={handleSubmit}>SIGN IN</button>
//                 {/* </form> */}
//             </div>
//         </div>
//     );
// }


// export default Signin;

// Signin.js

import React, { useState } from "react";
import '../Styles/Signin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import logo from '../img/logo.png';

function Signin() {
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');

    function handleSubmit() {
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const navigate = useNavigate();

    const routeChange = () => {
        let path = `/register`;
        navigate(path);
    }

    return (
        <div className="sign_container">
            <div className="left-container">
                <div className="logo_container">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <h3 className="para_1">New here?</h3>
                <p className="para_2">Sign up and discover a great amount of new opportunities!</p>
                <button className="register_btn" onClick={routeChange}>SIGN UP</button>
            </div>
            <div className="right-container">
                <h3 className="sign_in"> Sign In</h3>
                <div className="form_container">
                    <div className="input_container">
                        <label htmlFor="email">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />
                    </div>

                    <div className="input_container">
                        <label htmlFor="password">
                            <FontAwesomeIcon icon={faLock} className="icon" />
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Your password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="submit_btn" onClick={handleSubmit}>SIGN IN</button>
            </div>
        </div>
    );
}

export default Signin;

