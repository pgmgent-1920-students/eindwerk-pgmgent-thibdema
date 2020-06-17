import React, {} from 'react';
import { Link } from 'react-router-dom';

import * as Routes from '../../routes';
import Logo from './Logo';

import {useAuth} from '../../services';

import './Footer.scss';

const Footer = ({children}) => {
  const {currentUser, signOut} = useAuth();

  return (
    <footer className="footer page-footer center-on-small-only stylish-color-dark bg-light">
      <div className="container footer-content">
        <div className="row">
          <div className="col-md-4">
            <h5 className="title mb-4 mt-3 font-bold logo-title">
              <Link to="/"><Logo type="text" /></Link>
            </h5>
            <p className="footer-description">
              The music livestream app for DJs and artists during COVID-19. Share your embedded link from Youtube, Twitch, Mixer or another platform. Don't forget to enjoy the music. 
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="title mb-4 mt-3 font-bold">Navigation</h5>
            <ul>
              <li><Link to={Routes.HOME}>Home</Link></li>
              <li><Link to={Routes.CATEGORIES}>Categories</Link></li>
              <li><Link to={Routes.BROWSE}>Browse</Link></li>
              <li><Link to={Routes.STREAM}>Stream</Link></li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="title mb-4 mt-3 font-bold">Account</h5>
            {(!!currentUser) ? 
              <ul>
                <li><Link to={Routes.ACCOUNT}>Account</Link></li>
                <li><Link to={Routes.SETTINGS}>Settings</Link></li>
                <li><Link to={Routes.HOME} onClick={signOut}>Logout</Link></li>
              </ul>
              :
              <ul>
                <li><Link to={Routes.AUTH_SIGN_IN}>Login</Link></li>
                <li><Link to={Routes.REGISTER}>Register</Link></li>
              </ul>
              }
          </div>
          <hr className="clearfix w-100 d-md-none"/>
          <div className="col-md-2 mx-auto">
            <h5 className="title mb-4 mt-3 font-bold ">Our product</h5>
            <ul>
              <li><Link to={Routes.SUPPORT}>Support</Link></li>
              <li><Link to={Routes.PRIVACYPOLICY}>Privacy Policy</Link></li>
              <li><Link to={Routes.FAQ}>FAQ</Link></li>
              <li><Link to={Routes.CONTACT}>Contact</Link></li>
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
              <Link to="https://www.facebook.com/GraduaatProgrammeren.Arteveldehogeschool/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="https://www.instagram.com/arteveldehogeschool/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="https://twitter.com/ArteveldehsGent" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/thibaut-de-maerteleire-4131b0152/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="https://www.youtube.com/channel/UCZH8RwUBN5pfQ2hwNmN-ekw" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
