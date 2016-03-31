import React, { Component, PropTypes } from 'react'

class Comment extends Component
{
  render()
  {
    const { text } = this.props.comment;

    return (
      <div>
        <section>{text}</section>
      </div>
    )
  }
}

export default Comment