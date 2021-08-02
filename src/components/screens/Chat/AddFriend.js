import React, { useState } from "react";
//Modal
import Modal from "@material-ui/core/Modal";
import { Form, Label, Save, SaveDiv } from "../Profile/styles";
import { Backdrop, Fade, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addFriend } from "../../../store/actions/friendActions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignItems: "center",
    display: "flex",
  },
}));

const AddFriend = ({ setOpenModal, userId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const [friendship, setFriendship] = useState({
    firstUserId: userId,
    secondUserId: "",
  });

  const handleAdd = () => {
    dispatch(addFriend(friendship, setOpen));
  };
  const handleChange = (event) => {
    setFriendship({
      ...friendship,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{ backgroundColor: "#e6e8e9" }}>
          <div className={classes.paper}>
            <Form onSubmit={handleAdd}>
              <Label>Username</Label>
              <TextField
                fullWidth
                onChange={handleChange}
                name="secondUserId"
                variant="outlined"
                type="text"
                size="small"
              />

              <SaveDiv>
                <Save type="submit">Add</Save>
              </SaveDiv>
            </Form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddFriend;
