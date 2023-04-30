import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./App.css";

// /**
//  * option 1: (dinosaur era)
//  */
// function myFunction(input1) {
//     return 42;
// }

// /**
//  * option 2: (ES6)
//  *
//  * ZI + JACOB + ETHAN LIKEs THIS BETTER
//  */
// const myFunction2 = (input1) => {
//     return 42;
// };

const App = () => {
    const [user, setUser] = useState({
        firstName: "Joe",
        lastName: "Ratnofsky",
        email: "zi@gmail.com",
        phone: "+1234567890",
    });

    /*

      user = 10 <- NOOOOOO
      setUser(10) <- :))

    */

    return (
        <>
            <h2>Contact</h2>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <button
                onClick={() => {
                    const first = faker.name.firstName();
                    const last = faker.name.lastName();

                    setUser({
                        firstName: first,
                        lastName: last,
                        email: faker.internet.email(first, last),
                        phone: faker.phone.number("631-###-####"),
                    });
                }}
            >
                Generate!
            </button>
        </>
    );
};

export default App;
