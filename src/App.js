import React from "react";
import Contact from "./components/Contact";

function App() {
  const users = [
    {
      id: 3,
      name: "Riccardo",
      online: false,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 2,
      name: "Genoveffa",
      online: true,
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 3,
      name: "Rick",
      online: false,
      avatar: "https://randomuser.me/api/portraits/men/88.jpg"
    }
  ];

  return (
    <div className="App">
      {users.map(user => (
        <Contact name={user.name} online={user.online} avatar={user.avatar} />
      ))}
    </div>
  );
}

export default App;
