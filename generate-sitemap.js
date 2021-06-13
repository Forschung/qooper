const fs = require('fs');
const globby = require('globby');
const axios = require('axios');

const Types = {
    Product: 1,
};

const date = new Date();

const domain = 'https://www.qooper.io';