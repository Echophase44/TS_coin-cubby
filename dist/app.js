"use strict";
const btn_addChore = document.getElementById("btn_addChore");
const btn_addPerson = document.getElementById("btn_addPerson");
btn_addChore === null || btn_addChore === void 0 ? void 0 : btn_addChore.addEventListener("click", () => {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    new Chore();
});
btn_addPerson === null || btn_addPerson === void 0 ? void 0 : btn_addPerson.addEventListener("click", () => {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    const cardNameInput = document.querySelector("#name");
    const personName = cardNameInput.value;
    new PersonCard(personName);
});
class PersonCard {
    constructor(name) {
        this.templateElement = document.getElementById("temp_personCard");
        this.hostElement = document.getElementById("person_host");
        const newPersonNode = document.importNode(this.templateElement.content, true);
        this.element = newPersonNode.firstElementChild;
        this.nameElement = this.element.querySelector(".card_title");
        this.addPerson(name);
    }
    addPerson(name) {
        this.hostElement.appendChild(this.element);
        console.log(this.nameElement);
        console.log(name);
    }
}
class Chore {
    constructor() {
        this.templateElement = document.getElementById("temp_chore");
        this.hostElement = document.getElementById("chores_host");
        const newChore = document.importNode(this.templateElement.content, true);
        this.element = newChore.firstElementChild;
        this.addChore();
    }
    addChore() {
        this.hostElement.appendChild(this.element);
    }
}
