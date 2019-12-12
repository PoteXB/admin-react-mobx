const paths = require('../config/paths');
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.env.REACT_APP_HOST = paths.proHost;
require('./start');