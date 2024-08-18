import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

function TodoDetails({ todoDetails, openDialog, setOpenDialog }) {
  return (
    <>
      <Fragment>
        <Dialog open={openDialog}>
          <DialogTitle>{todoDetails}</DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenDialog(false);
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </>
  );
}

export default TodoDetails;
