import React from "react";
import { Avatar } from "@material-ui/core";
import classes from "./Message.module.scss";

//avatarが左にあるメッセージ（他人）
export const MessageLeft = (props: {
  message?: string;
  timestamp?: string;
  photoURL?: string;
  displayName?: string;
  avatarDisp?: boolean;
}) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "名無しさん";
  return (
    <>
      <div className={classes.messageRow}>
        <Avatar
          alt={displayName}
          className={classes.orange}
          src={photoURL}
        ></Avatar>
        <div>
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.messageBlue}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
            <div className={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};

//avatarが右にあるメッセージ（自分）
export const MessageRight = (props: {
  message?: string;
  timestamp?: string;
  avatarDisp?: boolean;
  displayName?: string;
  photoURL?: string;
}) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div className={classes.messageRowRight}>
      <div className={classes.messageOrange}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
};
