import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../Comments'


const Content = ({ articles, handleCommentChange, comment, handleSubmitComment }) => {
  return (


    <>
      <CssBaseline />
      <Container maxWidth="sm">
      <Paper>
        {
          articles.map(({ title, link, summary, _id, posts}) =>
          <div>
          <h1>
          <Link href={link} target="_blank">
          {title}
        </Link>
        </h1>
        <h3>{summary}</h3>
        
        <Comments articleId = {_id} handleCommentChange = {handleCommentChange} comment = {comment} handleSubmitComment = {handleSubmitComment} posts = {posts}/>
 
        </div>
  
          )
        }
      </Paper>
      </Container>


      {/* // <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}


    </>
  )
}

export default Content;