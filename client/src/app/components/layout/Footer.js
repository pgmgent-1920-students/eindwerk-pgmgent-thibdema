import React, { } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';

import './Footer.scss';

const Footer = ({children}) => {
  return (
    <footer className="footer page-footer center-on-small-only stylish-color-dark bg-light">
      <div className="container footer-content">
        <div className="row">
          <div className="col-md-4">
            <h5 className="title mb-4 mt-3 font-bold logo-title">
              <Logo type="text" />
            </h5>
            <p className="footer-description">
              The music livestream app for DJ's and artists during COVID-19. Share your embedded link from youtube, twitch, mixer or another platform. Don't forget to enjoy the music. 
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="title mb-4 mt-3 font-bold">Links</h5>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="title mb-4 mt-3 font-bold">Links</h5>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="title mb-4 mt-3 font-bold ">Links</h5>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <div className="footer-copyright">
        <div className="container-fluid footer-copyright-structure">
            <div className="copyright">
              © 2020 Copyright by <a href="https://www.linkedin.com/in/thibaut-de-maerteleire-4131b0152/" target="_blank" className="author" rel="noopener noreferrer">Thibaut De Maerteleire</a>
            </div>
            <div className="social-media">
              <a href="https://www.facebook.com/GraduaatProgrammeren.Arteveldehogeschool/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/arteveldehogeschool/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/ArteveldehsGent" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/thibaut-de-maerteleire-4131b0152/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCZH8RwUBN5pfQ2hwNmN-ekw" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
