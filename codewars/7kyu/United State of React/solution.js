import React from "react";

export class States extends React.Component {
  constructor() {
    super();
    this.state = { united: false };
  }
  render() {
    return (
      <div className="status">
        {this.state.united ? "Code for everyone" : "Make America code again"}
      </div>
    );
  }

  unite() {
    this.setState((state) => {
      return { united: !state.united };
    });
  }
}
