import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component
{
  state =
  {
    isOpen: false
  };

  render()
  {
    return (
      (this.props.comments && this.props.comments.length > 0)
      ?
      <div style={{marginTop: 15 + 'px'}}>
        <ul>
          {this.getList()}
          {this.getButton()}
        </ul>
      </div>
      :
      null
    );
  }

  getList()
  {
    return (
      this.state.isOpen
      ?
      this.props.comments.map((comment, index) =>
        <li key={comment.id}><Comment comment={comment}/></li>
      )
      :
      null
    );
  }

  getButton()
  {
    const directText = this.state.isOpen ? 'Hide' : 'View';
    const commentsLength = this.state.isOpen ? '' : '(' + this.props.comments.length + ')';

    return (
      <div onClick = {this.handleClick} style={{marginTop: '15px', textDecoration: 'underline', cursor: 'pointer'}}>{directText} comments {commentsLength}</div>
    );
  }

  handleClick = (ev) =>
  {
    this.setState(
    {
      isOpen: !this.state.isOpen
    })
  }
}

export default CommentList