import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../features/movie/movieSlice";
import VideoBackGround from "./video/VideoBackGround";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MovieDialog() {
  const dispatch = useDispatch();
  const { open, movieId } = useSelector((state) => state.movie);

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar sx={{ bgcolor: "black" }}>
            <IconButton
              edge="start"
              color="warning"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
          <VideoBackGround movieId={movieId} />
      </Dialog>
    </React.Fragment>
  );
}
