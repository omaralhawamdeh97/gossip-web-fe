//react
import React, { useState } from "react";

//Modal
import Modal from "@material-ui/core/Modal";
import { Backdrop, Fade, TextField } from "@material-ui/core";

//redux
import { useDispatch } from "react-redux";

//actions
import { addFriend } from "../../../store/actions/friendActions";

//styles
import { Form, Label, Save, SaveDiv } from "../Profile/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Error } from "../SignIn/styles";

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

  const [friend, setFriend] = useState("none");
  const [open, setOpen] = useState(true);
  const [friendship, setFriendship] = useState({
    firstUserId: userId,
    secondUserId: "",
  });

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addFriend(friendship, setOpen, setFriend));
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
              <Error style={{ display: friend }}>
                User name does not exist
              </Error>

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
