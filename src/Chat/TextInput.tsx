import React from "react";
import SendIcon from "@material-ui/icons/Send";
import classes from "./TextInput.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const TextInput: React.FC<{ onSubmit: (message: string) => void }> = ({
  onSubmit,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target);
      }}
      className={classes.wrapForm}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-text"
        label="メッセージを入力"
        className={classes.wrapText}
        //margin="normal"
      />
      <Button variant="contained" color="primary" className={classes.button}>
        <SendIcon />
      </Button>
    </form>
  );
};

export default TextInput;
