// Example file: app/javascript/packs/server_rendering.js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from '../components/Header';

global.React = React;
global.ReactDOMServer = ReactDOMServer;
global.Header = Header;
