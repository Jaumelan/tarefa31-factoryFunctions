const fs = require('fs');

module.exports = function sectorsFields() {
    const rawData = JSON.parse( fs.readFileSync("database.json") );

    let result = rawData.map(({sector}) => sector);
    let unique = [...new Set(result)];
    return unique
}
