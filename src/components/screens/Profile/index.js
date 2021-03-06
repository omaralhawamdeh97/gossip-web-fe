//styles
import {
  ProfileCard,
  ProfileImage,
  Form,
  Label,
  ModalImage,
  Save,
  ImageWrap,
  SaveDiv,
  Error,
} from "./styles";
import { Button, TextField } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";

//Redux
import { useDispatch, useSelector } from "react-redux";

//React
import { useState } from "react";

//actions
import {
  updateUser,
  updateUserImage,
} from "../../../store/actions/authActions";

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

function Profile() {
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const classes = useStyles();
  const user = useSelector((state) => state.authReducer.user);
  const [profile, setProfile] = useState({
    username: user.username,
    fullname: user.fullname,
    currentpassword: "",
    password: "",
    userId: user.id,
  });
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleImage = (e) => {
    dispatch(updateUserImage({ image: e.target.files[0] }, user));
  };
  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateUser(profile, user, setNameError, setPasswordError, handleClose)
    );
  };

  return (
    <ProfileCard>
      <ProfileImage src={user.image} />
      <Button variant="outlined" type="button" onClick={handleOpen}>
        Edit my profile
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{ backgroundColor: "#e6e8e9" }}>
          <div className={classes.paper}>
            <Form onSubmit={handleSubmit}>
              <ImageWrap>
                <ModalImage src={user.image} />
                <Button component="label" style={{ paddingBottom: "35px" }}>
                  <ImageSearchIcon />
                  <TextField
                    fullWidth
                    onChange={handleImage}
                    name="image"
                    variant="outlined"
                    type="file"
                    size="small"
                    hidden={true}
                  />
                </Button>
              </ImageWrap>
              <Label>Username</Label>
              <TextField
                fullWidth
                onChange={handleChange}
                name="username"
                variant="outlined"
                type="text"
                size="small"
                value={profile.username}
              />
              {nameError ? <Error>Username already exist!</Error> : <></>}
              <Label>Fullname</Label>
              <TextField
                fullWidth
                onChange={handleChange}
                name="fullname"
                variant="outlined"
                type="text"
                size="small"
                value={profile.fullname}
              />
              <Label>Current Password</Label>
              <TextField
                fullWidth
                onChange={handleChange}
                name="currentpassword"
                variant="outlined"
                type="password"
                size="small"
              />
              {passwordError ? <Error>Invalid Password!</Error> : <></>}
              <Label>New Password</Label>
              <TextField
                fullWidth
                onChange={handleChange}
                name="password"
                variant="outlined"
                type="password"
                size="small"
              />

              <SaveDiv>
                <Save type="submit">Save Changes</Save>
              </SaveDiv>
            </Form>
          </div>
        </Fade>
      </Modal>
    </ProfileCard>
  );
}

export default Profile;
