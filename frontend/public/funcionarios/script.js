const apiUrl = "http://localhost:3000/funcionarios";
const selectOption = document.getElementById("sector");

const buttons = {
  birthButton: document.getElementById("birthButton"),
  sectorButton: document.getElementById("sectorButton"),
  phoneButton: document.getElementById("phoneButton"),
  addButton: document.getElementById("addUser")
};

const routes = {
  a: "/aniversariantes?",
  b: "/funcionarios?",
  c: "/ramais?",
  d: "/adicionar"
};

const query = {
  a: "birthMonth=",
  b: "sector=",
};

const queryValues = {
  a: "",
  b: "",
  input: {
    name: "",
    email: "",
    extension:"",
    birthDay: "",
    sector: ""
  }
};

const headerTable = document.querySelector("thead");
const response = document.querySelector("tbody");

function getQueryValues() {
  queryValues.a = document.getElementById("birthMonth").value;
  queryValues.b = selectOption.options[selectOption.selectedIndex].value;
   
  return queryValues;
}

function getInputValues() {
  queryValues.input.name = document.getElementById("name").value;
  queryValues.input.email = document.getElementById("email").value;
  queryValues.input.extension = document.getElementById("phone").value;
  queryValues.input.birthDay = new Date( document.getElementById("niver").value ).toISOString().split('T')[0];
  queryValues.input.sector = document.getElementById("setor").value;
  
  return queryValues;
}

const dataFunctions = {
  birth: function (data) {
    //headers
    let headName = document.getElementById("firstHeader");
    headName.innerHTML = "Nome";
    let headbirth = document.getElementById("secondHeader");
    headbirth.innerHTML = "Aniversário";
    //body
    response.innerHTML = "";
    data.forEach((element) => {
      let row = document.createElement("tr");
      let cellName = document.createElement("td");
      cellName.appendChild(document.createTextNode(element.name));
      let cellBirth = document.createElement("td");
      cellBirth.appendChild(document.createTextNode(element.birth));
      row.appendChild(cellName);
      row.appendChild(cellBirth);
      response.appendChild(row);
    });
  },
  sector: function (data) {
    let headName = document.getElementById("firstHeader");
    headName.innerHTML = "Nome";
    let headbirth = document.getElementById("secondHeader");
    headbirth.innerHTML = "Setor";
    response.innerHTML = "";
    data.forEach((element) => {
      let row = document.createElement("tr");
      let cellName = document.createElement("td");
      cellName.appendChild(document.createTextNode(element.name));
      let cellSector = document.createElement("td");
      cellSector.appendChild(document.createTextNode(element.sector));
      row.appendChild(cellName);
      row.appendChild(cellSector);
      response.appendChild(row);
    });
  },
  phone: function (data) {
    let headName = document.getElementById("firstHeader");
    headName.innerHTML = "Nome";
    let headbirth = document.getElementById("secondHeader");
    headbirth.innerHTML = "Ramal";
    response.innerHTML = "";
    data.forEach((element) => {
        let row = document.createElement("tr");
        let cellName = document.createElement("td");
        cellName.appendChild(document.createTextNode(element.name));
        let cellPhone = document.createElement("td");
        cellPhone.appendChild(document.createTextNode(element.phone));
        row.appendChild(cellName);
        row.appendChild(cellPhone);
        response.appendChild(row);
    });
  }
};

const promises = {
  aniversariantes: function () {
    getQueryValues();

    fetch(apiUrl + routes.a + query.a + queryValues.a, {
      method: "GET"
    })
      .then((answer) => answer.json())
      .then((birthdays) => {
        dataFunctions.birth(birthdays);
      })
      .catch();
  },
  funcionarios: function () {
    getQueryValues();

    fetch(apiUrl + routes.b + query.b + queryValues.b, {method: "GET"})
    .then((answer) => answer.json())
      .then((sector) => {
        dataFunctions.sector(sector);
      })
      .catch();
  },
  phoneExtension: function() {
      getQueryValues()

      fetch(apiUrl + routes.c, {method: "GET"})
      .then((answer) => answer.json())
      .then((phones) => {
        dataFunctions.phone(phones);
      })
      .catch();
  },
  adicionarUsuario: function() {
    getInputValues()
    
    console.log(queryValues.input)
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(queryValues.input)
    };

    fetch("http://localhost:3000/funcionarios/adicionar", requestOptions).then(response => response.json())
    .then(el => { console.log(el); })
    
  }
  
};

buttons.birthButton.addEventListener("click", () => {
  promises.aniversariantes();
  document.querySelector("form").reset();
});

buttons.sectorButton.addEventListener("click", () => {
    promises.funcionarios();
    document.querySelector("form").reset();
})

buttons.phoneButton.addEventListener("click", () => {
    promises.phoneExtension();
    document.querySelector("form").reset();
})

buttons.addButton.addEventListener("click", () => {
  promises.adicionarUsuario();
  //document.querySelector("form").reset();
})
