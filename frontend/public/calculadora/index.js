const display = document.getElementById('display');
const numberButtons = Array.from(document.getElementsByClassName("number"));
const operationButtons = Array.from(document.getElementsByClassName("operation"));
const equal = document.getElementById("equal");
let state = false;
const apiURL = "http://localhost:3000/calculation/";


let stage = function(param) {
    let operations = ["+", "-", "/", "*"];
    if ( operations.includes(param) ) {
        return state = true;
    } else if ( param === "=") {
        return state = false;
    }
}

numberButtons.map(numberButton => {
    numberButton.addEventListener("click", (event) => {
        let value = Number(event.target.innerText);
        fetch(apiURL + value, {method: "GET"}).then( answer => answer.json() ).then(data => {
            console.log(data);
            display.innerHTML = data}).catch(error => console.log('Error: '+ error))
    })
});

operationButtons.map(operation => {
    operation.addEventListener("click", (event) => {
        let operator = event.target.innerText;
        console.log(apiURL + operator)
        fetch(apiURL + operator, {method: "GET"}).then( answer => console.log( answer.status) )
            .catch(error => console.log('Error: '+ error))
            display.innerHTML = operator;
    })
})

equal.addEventListener("click", (event) => {
    let equal = event.target.innerText;
    console.log(apiURL + equal);
    fetch(apiURL + equal, {method: "GET"}).then( answer => answer.json() ).then(data => {
        console.log(data);
        display.innerHTML = data}).catch(error => console.log('Error: '+ error))
})