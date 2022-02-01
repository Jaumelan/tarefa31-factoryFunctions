const fs = require('fs');


module.exports = function funcionarios(setor) {
    const rawData = JSON.parse( fs.readFileSync("database.json") );

    const funcionarios = rawData.filter(user => {
        if (user.sector === setor) {
            
            return true;
        } else {
            return false;
        }
    }).map(({ name, sector}) => ({name, sector}));
    const funcionariosSorted = funcionarios.sort((a,b) => a.name.localeCompare(b.name));
    return funcionariosSorted
}



 