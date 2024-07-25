import { useState } from "react";
import { login } from "../APIs/loginAPI";

// eslint-disable-next-line react/prop-types
const Login = ({ setLoginForm }) => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            login({ email, password })

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <h1 className='display-1 my-5'>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" className='form-control  my-2' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className='form-control my-2' placeholder="Password" value={password} onChange={(e) => {
            setPassword(e.target.value);
          }}/>
          <div className="text-center">
            <button type="submit" className="btn btn-primary my-4" >Login</button>
          </div>
          
        </form>
        <p>Do not have an account? <a href="#" onClick={() => setLoginForm(false)}>Register</a></p>
      </div>

  )
}

export default Login