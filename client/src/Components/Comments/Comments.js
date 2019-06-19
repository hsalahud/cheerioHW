import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
}));

const Comments = ({articleId, handleCommentChange, comment, handleSubmitComment, posts}) => {
  const [open, setOpen] = React.useState(false);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Button onClick={handleOpen}>Leave a Comment</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Enter a Comment:
          </Typography>
          <TextField
            class="comment"
            id = {articleId}
            multiline
            rows="7"
            margin="normal"
            variant="outlined"
            onChange = {handleCommentChange}
            value = {comment}
          />
          <Button color = 'primary' onClick = {handleSubmitComment}>Post Comment</Button>

          <Typography>
            <ul>
              {
              posts.map(({body}) => 
                <li>{body}</li>
              )
            }
            </ul>
          </Typography>
        </div>
      </Modal>
    </div>
  );
}

export default Comments;