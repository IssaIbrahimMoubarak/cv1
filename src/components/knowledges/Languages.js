import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Php", xp: 2 },
      { id: 2, value: "C", xp: 1.2 },
      { id: 3, value: "JavaScript", xp: 1.0 },
      { id: 4, value: "Java", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "Symfony", xp: 1.9 },
      { id: 2, value: "Bootstrap", xp: 1.5 },
      { id: 3, value: "React", xp: 0.7 },
      { id: 4, value: "Material UI", xp: 0.5 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
