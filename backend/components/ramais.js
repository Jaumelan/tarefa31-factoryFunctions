const fs = require('fs');

module.exports = function onlyPhones() {
    const rawData = JSON.parse( fs.readFileSync("database.json") );
    const onlyPhones = rawData.map( ({name, extension}) => ({name, phone: extension}));
    const phoneAlfabet = onlyPhones.sort((a, b) => a.name.localeCompare(b.name));

    return phoneAlfabet;
}

