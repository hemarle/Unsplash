import React, { useState } from "react";
import "./Header.css";

import db from "./firebase";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
  },
}));

function Header() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [label, setLabel] = useState();
  const [url, setUrl] = useState();
  const handleLabel = (e) => {
    setLabel(e.target.value);
  };
  const handleUrl = (e) => {
    setUrl(e.target.value);
  };
  const handleUpload = (e) => {
    console.log(label, url);
    db.collection("photo").add({
      label: label,
      imageUrl: url,
    });
    handleClose();
  };

  return (
    <div className="header">
      <div className="header__left">
        <PersonIcon />
        <div className="header__text">
          <h3>My Unsplash</h3>
          <h6>DevChallenges.io</h6>
        </div>
      </div>
      <div className="header__center">
        <div className="header__centerContent">
          <SearchIcon />
          <input type="text" placeholder="Search by name" />
        </div>
      </div>
      <div className="header__right">
        <button onClick={handleOpen} className="btn btn-success">
          Add a File
        </button>
      </div>

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
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add a new photo</h2>
            <div className="header__input">
              <label for="header__inputLabel">Label: </label>
              <input
                type="text"
                id="header__inputLabel"
                placeholder="Enter Image Label"
                className="form-control"
                onChange={handleLabel}
              />

              <label for="header__inputURL">URL: </label>
              <input
                type="text"
                id="header__inputURL"
                placeholder="Enter Image URL"
                className="form-control"
                onChange={handleUrl}
              />
            </div>
            <div className="header__buttons">
              <button className="btn btn-danger" onClick={handleClose}>
                Cancel
              </button>
              <button className="btn btn-success" onClick={handleUpload}>
                Add image
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Header;
