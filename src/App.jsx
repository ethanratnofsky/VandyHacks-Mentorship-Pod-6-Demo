import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.styles.css";
import ContactCard from "./ContactCard";

const App = () => {
  // Current user and default values
  const [users, setUsers] = useState([
    {
      firstName: "Joe",
      lastName: "Ratnofsky",
      email: "zi@gmail.com",
      phone: "+1234567890",
    },
  ]);

  // Generate a new user
  const handleNewUser = () => {
    const first = faker.name.firstName();
    const last = faker.name.lastName();

    setUsers((prev) => [
      ...prev,
      {
        firstName: first,
        lastName: last,
        email: faker.internet.email(first, last),
        phone: faker.phone.number("631-###-####"),
      },
    ]);
  };

  const deleteCard = (index) => {
    // TODO -> remove the user at the specific index
    setUsers((prev) => prev.filter((user, i) => i !== index));
  };

  const clearList = () => {
    // TODO -> clear the list
  };

  const handleTenNewUsers = () => {
    // TODO -> generate 10 new users
  };

  // change the tab title to reflect the number of users
  useEffect(() => {
    document.title = `${users.length} users`;
  }, [users]);

  return (
    <>
      <div className="top-bar">
        <div className="app-header">
          <h1>Contact Generator</h1>
        </div>
      </div>
      <div className="card-list">
        {users.map((user, index) => (
          <ContactCard
            key={index}
            user={user}
            index={index}
            deleteCard={deleteCard}
          />
        ))}
        <div className="generate-button-container contact-card-body">
          <button onClick={handleNewUser} className="generate-button">
            Generate!
          </button>
          <button onClick={handleTenNewUsers} className="generate-button">
            Generate 10!
          </button>
        </div>
      </div>
      <button onClick={clearList}>Clear list</button>
    </>
  );
};

export default App;
