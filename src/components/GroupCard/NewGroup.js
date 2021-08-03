import React, { useState } from "react";
//Modal
import Modal from "@material-ui/core/Modal";
import { Backdrop, Fade, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { Form, Label, Save, SaveDiv } from "../screens/Profile/styles";
import FriendCard from "../screens/Chat/FriendCard";

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
    width: "30%",
  },
}));

const NewGroup = ({ setOpenModalTwo }) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [group, setGroup] = useState({});
  const disabled = true;
  var friends,
    addedFriends = [];
  if (user.from || user.to) {
    const fromList = user.from.map((friend) => friend);
    const toList = user.to.map((friend) => friend);
    friends = [...fromList, ...toList].map((friend) => (
      <div>
        <button style={{ borderWidth: 0, margin: "5px", width: "100%" }}>
          <FriendCard disabled={disabled} friend={friend} user={user} />
        </button>
      </div>
    ));
  }
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => setOpenModalTwo(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{ backgroundColor: "#e6e8e9" }}>
          <div className={classes.paper}>
            <Form>
              <Label>Friends</Label>
              {friends}
              <SaveDiv>
                <Save type="submit">Create Group</Save>
              </SaveDiv>
            </Form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default NewGroup;
