const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@env': path.resolve(__dirname, 'src/env'),
            '@interfaces': path.resolve(__dirname, 'src/interfaces'),
            '@mock': path.resolve(__dirname, 'src/mock'),
            '@modules': path.resolve(__dirname, 'src/modules'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@utils': path.resolve(__dirname, 'src/utils')
        },
    },
};