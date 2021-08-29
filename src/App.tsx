import React, { useState } from "react";
import ChatSupportButton from "./ChatSupportButton";
import Chat from "./Chat";
import classes from "./App.module.scss";

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      {!open && <ChatSupportButton onClick={() => setOpen((x) => !x)} />}
      {open && <Chat onClose={() => setOpen((x) => !x)} />}
    </div>
  );
};

export default App;
