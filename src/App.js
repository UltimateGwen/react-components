import React from "react";
import ContactList from "./components/ContactList";

const users = [
  {
    id: 1,
    name: "Leo Harris",
    online: false,
    avatar: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    id: 2,
    name: "Frank Morales",
    online: true,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Dave Sanders",
    online: false,
    avatar: "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    id: 4,
    name: "Calvin Alexander",
    online: true,
    avatar: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    id: 5,
    name: "Kurt Foster",
    online: true,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg"
  }
];

function App() {
  return (
    <div className="App">
      <ContactList users={users} />
    </div>
  );
}

export default App;
