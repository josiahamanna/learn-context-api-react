import React from "react";
import Context from "./UserContext";

const MessageList = () => (
  <Context.Consumer>
    {(user) => (
      <div className="MessageList">
        <div className="no-messages">
          Your mailbox is empty, {user.firstName}! 🎉
        </div>
      </div>
    )}
  </Context.Consumer>
);

export default MessageList;
