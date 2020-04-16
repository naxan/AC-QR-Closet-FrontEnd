import React from "react";
import Pattern from "../../components/Pattern/Pattern";

// --- PROPS RECEIVED ---
// PROFILE:
// patterns, userOwned
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
          />
        );
      });
    }
    return <div className="PatternContainer">{patternsToRender}</div>;
  }
}

export default PatternContainer;
