import { useState } from "react";
import { register } from "../APIs/registerAPI";
// eslint-disable-next-line react/prop-types
const Register = ({ setLoginForm }) => {
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      register({ name, email, password });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="display-1 my-5">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          className="form-control my-2"
          placeholder="First and Last Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="form-control my-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control my-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-4">
            Register
          </button>
        </div>
      </form>

      <p>
        Already have an account? <a href="#" onClick={() => {setLoginForm(true)}}>Login</a>
      </p>
    </div>
  );
};

export default Register;
