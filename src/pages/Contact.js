import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Niamey/Niger</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="(+227) 80 77 12 26">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Numéro du téléphone est copié 👍");
                  }}
                >
                  (+227) 80 77 12 26
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="issaibrahimmoubarak@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Adresse E-mail est copié 👍");
                  }}
                >
                  issaibrahimmoubarak@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/moubarak-issa-ibrahim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/ISSA-IBRAHIM-Moubarak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>GitHub</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/ISSA_IBRAHIM_Mo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://codepen.io/Astuces/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>CodePen</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
