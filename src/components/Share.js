import React from 'react';
import logo from '../img/twitter-logo.jpg';

const Share = ({ path }) => (
  <a id="tweet-quote" href={path}>
     <img id="logo" src={logo} alt="Tweet quote" title="Tweet quote" />
  </a>
);

export default Share;
