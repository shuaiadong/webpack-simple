const path = require('path');



module.exports = function (plop) {
    require('./inferred-config');
    require('./plop-index')(plop);
}