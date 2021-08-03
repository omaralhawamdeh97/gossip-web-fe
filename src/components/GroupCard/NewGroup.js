//react
import React, { useState } from "react";

//Modal
import Modal from "@material-ui/core/Modal";
import { useDispatch, useSelector } from "react-redux";

//components
import FriendCard from "../screens/Chat/FriendCard";

//actions
import { addChat } from "../../store/actions/chatActions";

//styles
import { Backdrop, Fade, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Label, Save, SaveDiv } from "../screens/Profile/styles";

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

var addedFriends = [];

const NewGroup = ({ setOpenModalTwo }) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [chat, setChat] = useState({ name: "" });
  var friends;

  const handleChange = (event) => {
    setChat({ ...chat, [event.target.name]: event.target.value });
  };

  const handleAddedArray = (friendId) => {
    addedFriends.push({ userId: friendId, chatId: "" });
    console.log(addedFriends);
  };

  if (user.from || user.to) {
    const fromList = user.from.map((friend) => friend);
    const toList = user.to.map((friend) => friend);
    friends = [...fromList, ...toList].map((friend) => (
      <FriendCard
        onClick={() => handleAddedArray(friend.id)}
        friend={friend}
        user={user}
      />
    ));
  }

  const handleSubmit = () => {
    addedFriends.push({ userId: user.id, chatId: "" });
    dispatch(addChat(chat, addedFriends, setOpenModalTwo));
  };

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
            <Label>Group Name</Label>
            <TextField
              fullWidth
              onChange={handleChange}
              name="name"
              variant="outlined"
              type="text"
              size="small"
            />
            <Label>Friends</Label>

            {friends}
            <SaveDiv>
              <Save onClick={handleSubmit} type="submit">
                Create Group
              </Save>
            </SaveDiv>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default NewGroup;
