import React, { useContext, useState } from 'react';
import login from "../images/login.png";
import { NavLink, useNavigate } from 'react-router-dom';

import { UserContext } from '../App';

export default function Login() {


  const {state,dispatch}=useContext(UserContext);



  const navigate = useNavigate();

  // const [user, setuser] = useState({ email: "", password: "" });
  // let name, value;
  // const handleChange = (e) => {
  //   console.log(e);
  //   name = e.target.name;
  //   value = e.target.value;
  //   setuser({ ...user, [name]: value });
  // }

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    // const { email, password } =user;

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })

    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid credentials");
    }
    else {
      dispatch({type:"USER",payload:true});
      window.alert("Login Successfull");
      console.log("Login success");
      navigate("/");

    }

  }


  return (
    <>
      <section className='signin'>
        <div className='container mt-5'>
          <div className='signin-content'>
            <div className='signin-image'>

              <figure>
                <img src={login} alt="login" />
              </figure>
              <NavLink to="/signup" className="signup-image-link"> Create an account</NavLink>
            </div>
            <div className='signin-form'>
              <h2 className='form-title'>
                Sign in</h2>
              <form method="POST" className='register-form' id='register-form'>

                <div className='form-group'>
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id='email' autoComplete='off'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Your Email' />

                </div>


                <div className='form-group'>
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id='password' autoComplete='off'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Your Password' />

                </div>


                <div className='form-group form-button'>
                  <input type="submit" name="signin" id="signin" className='form-submit'
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
