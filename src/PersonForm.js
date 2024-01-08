import React, { useState, useEffect } from "react";
import PersonList from "./PersonList";

const PersonForm = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      id: "id" + Math.random().toString(12).slice(2),
      name: name,
      lastName: lastName,
      email: email,
      password: password,
    };

    setPeopleList((oldPeopleList) => [...oldPeopleList, newPerson]);
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  const deletePerson = (id) => {
    const updatedPeopleList = peopleList.filter((person) => person.id !== id);
    setPeopleList(updatedPeopleList);
  };

  return (
    <div className="form-container">
      <form onSubmit={addPerson}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Add</button>
      </form>
      {peopleList.length > 0 && (
        <PersonList people={peopleList} deleteButton={deletePerson} />
      )}
    </div>
  );
};

export default PersonForm;
