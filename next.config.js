const withTM = require('next-transpile-modules')(['next-auth', 'query-string']);

module.exports = withTM({
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./generate-sitemap');
        }

        return config;
    },
});
