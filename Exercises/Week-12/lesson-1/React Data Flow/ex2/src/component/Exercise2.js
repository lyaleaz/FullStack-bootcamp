import React, { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

function Exercise2() {
  const [dataName, setDataName] = useState({
    displayConversation: null,
    conversations: [
      {
        with: "Laura",
        convo: [
          { text: "Hi", sender: "self" },
          { text: "You there?", sender: "self" },
          { text: "Yeah, hi, what's up?", sender: "other" },
        ],
      },
      {
        with: "Dad",
        convo: [
          { text: "Have you finished your school work yet?", sender: "other" },
          { text: "Yes.", sender: "self" },
          { text: "What do you mean, yes?", sender: "other" },
          { text: "??", sender: "self" },
        ],
      },
      {
        with: "Shoobert",
        convo: [
          { text: "Shoobert!!!", sender: "self" },
          { text: "Dude!!!!!!!!", sender: "other" },
          { text: "Shooooooooo BERT!", sender: "self" },
          { text: "You're my best friend", sender: "other" },
          { text: "No, *you're* my best friend", sender: "self" },
        ],
      },
    ],
  });

  const handleContactClick = (contact) => {
    setDataName({ ...dataName, displayConversation: contact });
  };

  const handleBackClick = () => {
    setDataName({ ...dataName, displayConversation: null });
  };

  return (
    <div>
      {dataName.displayConversation === null ? (
        <List
          conversations={dataName.conversations}
          onContactClick={handleContactClick}
        />
      ) : (
        <Conversation
          conversation={dataName.conversations.find(
            (conv) => conv.with === dataName.displayConversation
          )}
          onBack={handleBackClick}
        />
      )}
    </div>
  );
}

export default Exercise2;
