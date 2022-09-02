import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>ISSA IBRAHIM Moubarak</h1>
          <h2>Analyste-Programmeur</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">
              Télécharger le CV en PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
