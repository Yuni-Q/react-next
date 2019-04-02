// fileTransformer.js
const path = require('path');

module.exports = {
    process(src: any, filename: any, config: any, options: any) {
        return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
    },
};