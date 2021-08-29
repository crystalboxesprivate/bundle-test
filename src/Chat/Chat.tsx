import React, { useEffect, useState } from "react";
import classes from "./Chat.module.scss";
import { MessageLeft, MessageRight } from "./Message";
import TextInput from "./TextInput";
import CloseIcon from "@material-ui/icons/Close";
import { getMessages } from "./apiExample";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";

const Chat: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<any[]>(() => []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (messages.length !== 0) {
      return;
    }
    setLoading(true);

    getMessages().then((x) => {
      setMessages(x);
      setLoading(false);
    });
  }, [messages]);

  return (
    <div className={classes.relative}>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Paper id="style-1" className={classes.messagesBody}>
            {loading && (
              <Box
                paddingY={4}
                width="100%"
                display="flex"
                justifyContent="center"
              >
                <CircularProgress />
              </Box>
            )}
            {messages.map((x) => {
              const Component =
                x.type === "MessageLeft" ? MessageLeft : MessageRight;
              return <Component key={x.id} {...x} />;
            })}
          </Paper>
          <Box display="flex">
            <TextInput onSubmit={(message: string) => {}} />
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Paper>
      </div>
    </div>
  );
};

export default Chat;
