import React, { Component } from 'react'

class Idea extends Component {


    handleClick = () => {
      this.props.onClick(this.props.idea.id);
    }

    enableEditing = (id) => {
      this.setState({editingIdeaId: id})
    }


  render () {
    return(
      <div className="title">
        <h4 onClick={this.handleClick}>
          {this.props.idea.title}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.idea.body}
        </p>
      </div>
    )
  }
}

export default Idea
