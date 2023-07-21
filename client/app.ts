const btn_addChore = document.getElementById("btn_addChore")!
const btn_addPerson = document.getElementById("btn_addPerson")!


btn_addChore?.addEventListener("click", () => {
  event?.preventDefault()
  new Chore()
})

btn_addPerson?.addEventListener("click", () => {
  event?.preventDefault()
  console.log("test")
  new PersonCard()
})

class PersonCard {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLDivElement;

  constructor() {
    this.templateElement = document.getElementById("temp_personCard")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("person_host")! as HTMLDivElement;

    const newPersonNode = document.importNode(this.templateElement.content, true);
    this.element = newPersonNode.firstElementChild as HTMLDivElement;
    this.addPerson()
  }

  private addPerson() {
    this.hostElement.appendChild(this.element)
  }
}

class Chore {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLUListElement;
  element: HTMLLIElement;

  constructor() {
    this.templateElement = document.getElementById("temp_chore")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("chores_host")! as HTMLUListElement;

    const newChore = document.importNode(this.templateElement.content, true)
    this.element = newChore.firstElementChild as HTMLLIElement;
    this.addChore()
  }

  private addChore() {
    this.hostElement.appendChild(this.element)
  }
}