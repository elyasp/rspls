import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { useStyles } from "./styles";
import { SvgRules } from "../iconComponents";
import { ActionButton } from "../button";

export const HelpModal: React.FC = ({ children }: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.helpModal}>
      <SvgRules />
    </div>
  );

  return (
    <>
      <div className={classes.openButton}>
        <ActionButton variant="help" onClick={handleOpen}>
          {children}
        </ActionButton>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        BackdropProps={{
          style: {
            backgroundColor: "rgba(46, 10, 80, 0.4)",
          },
        }}
      >
        {body}
      </Dialog>
    </>
  );
};
