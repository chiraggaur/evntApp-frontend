// function Events() {
//   return (
//     <>
//       <h1>All events Come here using fetch </h1>
//     </>
//   );
// }

// export default Events;

import "../styles/signup.css";
import { useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000/api";
function Event() {
  const [hostname, setHostName] = useState("");
  const [summary, setSummary] = useState("");

  const postData = {
    // Your data to be sent in the POST request body
    hostName: hostname,
    summary: summary,
  };

  const userSubmit = async () => {
    try {
      await axios.post(`${baseUrl}/events/register`, postData);
      setHostName("");
      setSummary("");
    } catch (error) {
      console.error("Error making POST request:", error.message);
    }
  };

  function handleName(event) {
    setHostName(event.target.value);
  }
  function handleSummary(event) {
    setSummary(event.target.value);
  }

  return (
    <>
      <div className="signup-form-wrapper">
        <label>Register Here </label>
        <form>
          <div className="input-form">
            <label>EventName</label>
            <input type="text" onChange={handleName} value={hostname}></input>
          </div>
          <div className="input-form">
            <label>Summary</label>
            <input
              type="textArea"
              onChange={handleSummary}
              value={summary}
            ></input>
          </div>

          <button type="button" onClick={userSubmit} id="signup-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Event;
