const fs = require('fs');

module.exports = function birthdates(param) {
    const rawData = JSON.parse( fs.readFileSync("database.json") );
    
    const aniversariantes = rawData.filter(user => {
        let [year , month , day] = user.birthDay.split("-");
        
        if ( Number(month) === Number(param) ) {
            return true;
        } else { 
            return false;
        }
    }).map(({name, birthDay}) => ({name, birth: birthDay}))

    const sortAniversariantes = aniversariantes.sort((a,b) => a.birth.localeCompare(b.birth))
    return sortAniversariantes
}