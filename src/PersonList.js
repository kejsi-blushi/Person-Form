import React from "react";

const PersonList = ({ people, deleteButton }) => {
  return (
    <div className="people-list">
      {people.map((person, index) => (
        <div key={index} className="person-card">
          <h3>{`${person.name} ${person.lastName}`}</h3>
          <p>Email: {person.email}</p>
          <button
            className="delete-button"
            onClick={() => deleteButton(person.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
