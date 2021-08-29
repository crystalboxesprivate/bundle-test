import React from "react";
import classes from "./Chat.module.scss";
import { MessageLeft, MessageRight } from "./Message";
import TextInput from "./TextInput";
import { Box, IconButton, Paper } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
const Chat: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className={classes.relative}>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Paper id="style-1" className={classes.messagesBody}>
            <MessageLeft
              message="あめんぼあかいなあいうえお"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName=""
              avatarDisp={true}
            />
            <MessageLeft
              message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
              timestamp="MM/DD 00:00"
              photoURL=""
              displayName="テスト"
              avatarDisp={false}
            />
            <MessageRight
              message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="まさりぶ"
              avatarDisp={true}
            />
            <MessageRight
              message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
              timestamp="MM/DD 00:00"
              photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
              displayName="まさりぶ"
              avatarDisp={false}
            />
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
