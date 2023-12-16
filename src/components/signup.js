import "../styles/signup.css";
import { useState } from "react";
import axios from "axios";
function SignUP() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const postData = {
    // Your data to be sent in the POST request body
    name: name,
    age: age,
    email: email,
    password: password,
  };

  const userSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/register",
        postData
      );
      const result = response.data;

      // Handle the response as needed
      console.log("POST Request Successful:", result);

      // If you need to update the state with the response data, do so here
      // setData(result);
    } catch (error) {
      console.error("Error making POST request:", error.message);
    }
  };

  function handleName(event) {
    setName(event.target.value);
  }
  function handleAge(event) {
    setAge(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="signup-form-wrapper">
        <label>Register Here </label>
        <form>
          <div className="input-form">
            <label>Name</label>
            <input type="text" onChange={handleName} value={name}></input>
          </div>
          <div className="input-form">
            <label>Age</label>
            <input type="number" onChange={handleAge} value={age}></input>
          </div>
          <div className="input-form">
            <label>Email</label>
            <input type="email" onChange={handleEmail} value={email}></input>
          </div>
          <div className="input-form">
            <label>Password</label>
            <input
              type="password"
              onChange={handlePassword}
              value={password}
            ></input>
          </div>

          <button onClick={userSubmit} id="signup-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUP;
