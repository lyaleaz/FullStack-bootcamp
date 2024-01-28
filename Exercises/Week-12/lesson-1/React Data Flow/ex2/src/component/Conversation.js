import React from "react";

const Conversation = ({ conversation, onBack }) => {
  if (!conversation || !conversation.convo) {
    return null;
  }

  return (
    <div>
      <h2>{conversation.with}'s Conversation</h2>
      <ul>
        {conversation.convo.map((message, index) => (
          <li key={index}>
            {message.sender === "self" ? "Me: " : `${conversation.with}: `}
            {message.text}
          </li>
        ))}
      </ul>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default Conversation;
