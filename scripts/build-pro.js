const paths = require('../config/paths');
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
process.env.GENERATE_SOURCEMAP = 'false';
process.env.REACT_APP_HOST = paths.proHost;
require('./build');