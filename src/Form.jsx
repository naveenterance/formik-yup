import React, { useState, useEffect } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [req, setreq] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!", firstName, lastName, email);
    // You can handle form submission here, e.g. send data to an API
  };
  useEffect(() => {
    console.log(`Count is now ${firstName}`);
    console.log(`name is now ${lastName}`);
    if (!firstName && lastName) {
      setreq("Required");
      console.log(req);
    } else setreq("");
  }, [lastName, firstName]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:{req}
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
