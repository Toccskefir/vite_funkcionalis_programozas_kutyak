import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import dogs from "./dogs.json";
const documentBody = document.getElementById("documentBody");
const div = document.createElement("div");

//eredeti tömbről másolat készítése
const newDogs = Array.from(dogs);

//a feladat
newDogs.sort((a, b) => {
  if (a.eletkor != b.eletkor) {
    return (a.eletkor - b.eletkor);
  } else {
    return (a.nev.localeCompare(b.nev));
  }
});

//b feladat
const labrador1 = dogs.filter(dog => dog.fajta.toLocaleLowerCase() == "labrador")
  .map(dog => `${dog.nev}(${dog.eletkor} éves)`);
console.log(labrador1);

const labrador2 = dogs.filter(dog => dog.fajta.toLocaleLowerCase() == "labrador").map(dog => ({
  nev: dog.nev,
  eletkor: dog.eletkor
}));

//c feladat
const olderThan10 = dogs.filter(dog => dog.eletkor > 10).map(owner => { return owner.gazda_neve });

//d feladat
const countType = (array, type) => {
  return array.filter(dog => dog.fajta == type).length;
}

const map = new Map();

dogs.forEach(e => {
  if (!map.has(e.fajta)) {
    map.set(e.fajta, countType(dogs, e.fajta));
  }
});

//e feladat
const atlagEletkor = dogs.reduce((a, b) => a.eletkor + b.eletkor, 0) / dogs.length;
console.log("Kutyák átlagéletkora: " + atlagEletkor);

//2. feladat
document.addEventListener('DOMContentLoaded', () => {
  const tableFull = document.getElementById("tableFull");
  dogs.forEach(e => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    td1.textContent = e.id;
    td2.textContent = e.nev;
    td3.textContent = e.eletkor;
    td4.textContent = e.fajta;
    td5.textContent = e.gazda_neve;

    tableFull.appendChild(tr);
  });
  documentBody.appendChild(div);
});

//3. feladat
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC");
const buttonD = document.getElementById("buttonD");

buttonA.addEventListener("click", () => {
  div.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");

  td1.textContent = "ID";
  td2.textContent = "Név";
  td3.textContent = "Életkor";
  td4.textContent = "Fajta";
  td5.textContent = "Gazda";

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  thead.appendChild(tr);

  newDogs.forEach(e => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    td1.textContent = e.id;
    td2.textContent = e.nev;
    td3.textContent = e.eletkor;
    td4.textContent = e.fajta;
    td5.textContent = e.gazda_neve;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  table.classList.add("table");

  div.appendChild(table);
});

buttonB.addEventListener("click", () => {
  div.innerHTML = "";
  const ul = document.createElement("ul");

  labrador1.forEach(e => {
    const li = document.createElement("li");
    li.textContent = e;
    ul.appendChild(li);
  });

  div.appendChild(ul);
});

buttonC.addEventListener("click", () => {
  div.innerHTML = "";
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  olderThan10.forEach(e => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");

    td.textContent = e;

    tr.appendChild(td);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  table.classList.add("table");

  div.appendChild(table);
});

buttonD.addEventListener("click", () => {
  div.innerHTML = "";
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  map.forEach((value, key) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");

    td1.textContent = key;
    td2.textContent = value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  table.classList.add("table");

  div.appendChild(table);
});