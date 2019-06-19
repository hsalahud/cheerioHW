import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Appbar from './Components/Appbar'
import Content from './Components/Content'

class App extends Component {

  state = {
    articles: [],
    showArticles: false,
    setOpen: false,
    comment: '',
    id: '',
  }

  handleCommentChange = ({target}) => {
    this.setState({id: target.id, comment: target.value})
    // console.log(this.state.id)
    // console.log(this.state.comment)
  }

  handleSubmitComment = (event) => {
    event.preventDefault()
    // console.log(this.state.id)
    // console.log(this.state.comment)


      fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          body: this.state.comment,
          link: this.state.id,
        })
      }).then(_ => {
        this.setState({comment: ''})
        fetch(`/links`)
        .then(r => r.json())
        .then((articles) => {
          this.setState({ articles})
          console.log(this.state)
        })
        .catch(e => console.error(e))
      })

    


  }

  handleOpen = () => {
    this.setState({setOpen: true})
  }

  handleClose = () => {
    this.setState({setOpen: false})
  }

  handleSeedData = event => {
    event.preventDefault()

    fetch(`/seed`)
      .then( _ => {

      fetch(`/links`)
      .then(r => r.json())
      .then((articles) => {
        alert("Click Display Articles to begin reading")
      })
    })
      .catch(e => console.error(e))

  }

  handleArticles= event => {
    event.preventDefault()

    fetch(`/links`)
      .then(r => r.json())
      .then((articles) => {
        this.setState({ articles, showArticles: true })
        console.log(this.state)
      })
      .catch(e => console.error(e))
  }


  render() {
    const { showArticles, articles, setOpen, comment } = this.state

    return (
      <>
        <Appbar generateArticles={this.handleSeedData} displayArticles = {this.handleArticles}/>
        <Content showArticles={showArticles} articles={articles} handleOpen = {this.handleOpen} handleClose = {this.handleClose} setOpen = {setOpen}
        handleCommentChange = {this.handleCommentChange} comment = {comment} handleSubmitComment = {this.handleSubmitComment}
        />
      </>
    );
  }
}

export default App;
