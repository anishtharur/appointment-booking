import "./App.css";
import React, { useState, useEffect } from "react";
import TextBox from "./TextBox";
import Dropdown from "./Dropdown";
import Radio from "./Radio";
import Calender from "./Calender";
import axios from "axios";

function App() {
  const [selectedFirstName, setFirstname] = useState("");
  const [selectedLastName, setLastName] = useState("");
  const [selectedEmail, setEmail] = useState("");
  const [selectedRadioDisplay, setSelectedRadioDisplay] = useState(false);
  const [selectedRadioVal, setSelectedRadioVal] = useState("");
  const [selectedCalender, setSelectedCalender] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleDropdownChange = (value) => {
    setSelectedRadioDisplay(true);
  };
  const handleFirstName = (value) => {
    setFirstname(value);
  };
  const handleLastName = (value) => {
    setLastName(value);
  };
  const handleEmail = (value) => {
    setEmail(value);
  };
  const handleRadioChange = (value) => {
    setSelectedRadioVal(value);
  };
  const handleCalenderChange = (value) => {
    setSelectedCalender(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const name = `${selectedFirstName} ${selectedLastName} ${selectedEmail} ${selectedRadioVal}`;
    const data = {
      userId: 10,
      title: name,
      body: selectedCalender,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        console.log(response);
        setLoading(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  if (submitted) {
    return (
      <div>
        <h1>Appointment Booked Successfully</h1>
        <button onClick={() => setSubmitted(false)}>Cancel Appointment</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        {loading && (
          <div>
            <h1>Book a session</h1>
            <br />
            <p>
              Fill the form below to book a virtual session with your doctor
            </p>
            <h3>Scheduling the appointment...</h3>
          </div>
        )}
        {!loading && (
          <form onSubmit={handleSubmit}>
            <h1>Book a session</h1>
            <br />
            <p>
              Fill the form below to book a virtual session with your doctor
            </p>
            <h6>Basic Info</h6>
            <TextBox value="First Name" OnChange={handleFirstName} />
            <br />
            <TextBox value="Last Name" OnChange={handleLastName} />
            <br />
            <TextBox value="Email" OnChange={handleEmail} />
            <br />
            <br />
            <h6>Doctor</h6>
            <Dropdown OnChange={handleDropdownChange} />
            <br />
            <br />
            <h6>Where ?</h6>
            {selectedRadioDisplay && <Radio OnChange={handleRadioChange} />}
            <br />
            <h6>When ?</h6>
            {selectedRadioDisplay && (
              <Calender OnChange={handleCalenderChange} />
            )}
            <br />
            <button type="submit">Confirm Booking</button>
          </form>
        )}
      </div>
    );
  }
}

export default App;
