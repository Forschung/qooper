const next = require('next');
const axios = require('axios');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const apm = require('elastic-apm-node');

if (!dev) {
    apm.start({
        serviceName: 'qooper',
        secretToken: '',
        apiKey: '',
        serverUrl: process.env.APM_SERVER_URL || 'http://apm-server:8200'
    });
}

let redirects = null;
const getUrlRedirects = async () => {
    if (redirects) {
        return Promise.resolve(redirects);
    }

    try {
        const { data } = await axios.get('http://qooper/qooper/api/UrlRedirect/all');
        return data.result.map(({ source, destination }) => ({
            source,
            destination
        }));
    } catch ({ error }) {
        throw `${error}`;
    }
};

app.prepare().then(async () => {
    const server = express();

    try {
        const result = await getUrlRedirects();
        result.map(({ source, destination, type = 301, method = 'get' }) => {
            server[method](source, (req, res) => {
                res.redirect(type, destination);
            });
        });
    } catch ({ error }) {
        console.log(error);
    }

    server.all('*', (req, res) => {
        if (req.path.startsWith('/api') && !dev) {
            // eslint-disable-next-line no-prototype-builtins
            if (req.query.hasOwnProperty('qooperId')) {
                apm.setTransactionName(`/qooperDetail/{qooperId}`);
                // eslint-disable-next-line no-prototype-builtins
            } else if (req.query.hasOwnProperty('page') && req.query.page === '/[slug]') {
                apm.setTransactionName(`/qooper/{qooperId}`);
            } else {
                apm.setTransactionName(`${req.method} ${req.path}`);
            }
        }
        return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
});
