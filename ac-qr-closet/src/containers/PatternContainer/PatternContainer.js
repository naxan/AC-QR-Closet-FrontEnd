import React from "react";
import Pattern from "../../components/Pattern/Pattern";
import "./PatternContainer.css";

// --- PROPS RECEIVED ---
// PROFILE:
// patterns, userOwned, handleDelete, handleEdit
// HOME:
// patterns

class PatternContainer extends React.Component {
  render() {
    let patternsToRender;
    if (this.props.patterns.length > 0) {
      patternsToRender = this.props.patterns.map((pattern) => {
        return (
          <Pattern
            pattern={pattern}
            key={pattern._id}
            userOwned={this.props.userOwned}
            handleDelete={this.props.handleDelete}
            handleEdit={this.props.handleEdit}
          />
        );
      });
    }
    return <div className="PatternContainer">{patternsToRender}</div>;
  }
}

export default PatternContainer;
