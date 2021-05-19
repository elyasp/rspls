import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

interface IPlayerProps {
  name: string | undefined;
  avatar: string | undefined;
}

export const Player: React.FC<IPlayerProps> = ({ name, avatar }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar src={avatar} alt={name} className={classes.avatar} />
      <Typography variant="h5" className={classes.name}>
        {name}
      </Typography>
    </div>
  );
};
