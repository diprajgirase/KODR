const {v4: uuid4} = require('uuid');

function  generateUUID() {
   return uuid4()
}

module.exports = {generateUUID}