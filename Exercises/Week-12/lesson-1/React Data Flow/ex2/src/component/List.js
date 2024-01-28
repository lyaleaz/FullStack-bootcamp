import React from "react";
import Contact from "./Contact ";

const List = ({ conversations, onContactClick }) => {
  const handleClick = (contact) => {
    onContactClick(contact);
  };

  return (
    <div>
      <h2>Contact List</h2>

      <ul>
        {conversations.map((conversation, index) => (
          <li key={index} onClick={() => handleClick(conversation.with)}>
            <Contact name={conversation.with} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
