import "./App.scss";
import Card from "./components/Card/Card";
import team from "./data/team";
import Nav from "./components/Nav/Nav";
import { useState } from "react";



const App = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const cardDisplay = team.map(member => {
    return <Card key={member.id} name={member.name} role={member.role} />
  })

  const handleSubmit = event => {
    event.preventDefault();
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
  
    if (firstName && lastName) {
      const updatedUser = { firstName, lastName };
      setUser(updatedUser);
      event.target.reset();
      console.log(user);
    }
  };

  return (
      <>
        <Nav userName={`${user.firstName} ${user.lastName}`} handleSubmit={handleSubmit} />
          <p className="greeting">Hello {user.firstName} {user.lastName}</p>
        <main>
          {cardDisplay}
        </main>
      </>
    )
}

export default App;