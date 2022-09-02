import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Aptitude</h3>
      <ul>
        <ul>
          <li className="hobby">
            <i className="fas fa-clock"></i>
            <span>Assidu</span>
          </li>
          <li className="hobby">
            <i className="fas fa-users"></i>
            <span>Esprit d'équipe</span>
          </li>
          <li className="hobby">
            <i className="fas fa-seedling"></i>
            <span>Dynamisne</span>
          </li>
          <li className="hobby">
            <i className="fas fa-rocket"></i>
            <span>Autonome</span>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Hobbies;
