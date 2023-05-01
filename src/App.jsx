import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.styles.css";
import ContactCard from "./ContactCard";

const App = () => {

    // Current user and default values
    const [users, setUsers] = useState([{
        firstName: "Joe",
        lastName: "Ratnofsky",
        email: "zi@gmail.com",
        phone: "+1234567890",
    }]);

    // Generate a new user
    const handleNewUser = () => {
        const first = faker.name.firstName();
        const last = faker.name.lastName();

        setUsers(prev => [...prev, {
            firstName: first,
            lastName: last,
            email: faker.internet.email(first, last),
            phone: faker.phone.number("631-###-####"),
        }]);
    }

    return (
        <>
            <div className="card-list">
                {users.map((user, index) => (
                    <ContactCard user={user} index={index} />
                ))}
            </div>
            <button onClick={handleNewUser}>
                Generate!
            </button>
        </>
    );
};

export default App;
