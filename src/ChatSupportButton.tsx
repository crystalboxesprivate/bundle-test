import React from "react";
import classes from "./ChatSupportButton.module.scss";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { Fade } from "@material-ui/core";

const ChatSupportButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Fade in={true}>
      <Paper elevation={3} className={classes.button}>
        <IconButton {...props}>
          <ChatBubbleOutlineIcon />
        </IconButton>
      </Paper>
    </Fade>
  );
};

export default ChatSupportButton;
