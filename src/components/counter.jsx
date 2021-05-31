import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    // tags: [],
  };

  renderTag() {
    if (this.state.tags.length === 0) return <p>There are no Tags.</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  /**
   * Arrow function don't rebind 'this' keyword. It inherit it.
   */
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <br></br>
        {this.state.tags.length === 0 && "There are no Tags. Please create."}
        {this.renderTag()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "btn m-2 btn-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
