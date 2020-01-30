import React from "react";
import Contact from "./Contact";

function ContactList(props) {
  const { users } = props;

  return (
    <div>
      {users.map(user => (
        <Contact name={user.name} online={user.online} avatar={user.avatar} />
      ))}
    </div>
  );
}

export default ContactList;
