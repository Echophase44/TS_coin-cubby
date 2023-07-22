const btn_addChore = document.getElementById("btn_addChore")!
const btn_addPerson = document.getElementById("btn_addPerson")!


btn_addChore?.addEventListener("click", () => {
  event?.preventDefault()
  new Chore()
})

btn_addPerson?.addEventListener("click", () => {
  event?.preventDefault()
  const cardNameInput = document.querySelector("#name") as HTMLInputElement;
  const personName = cardNameInput.value
  
  new PersonCard(personName)
})

class PersonCard {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLDivElement;
  nameElement: HTMLDivElement;
  

  constructor(name: string) {
    this.templateElement = document.getElementById("temp_personCard")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("person_host")! as HTMLDivElement;

    const newPersonNode = document.importNode(this.templateElement.content, true);
    this.element = newPersonNode.firstElementChild as HTMLDivElement;

    this.nameElement = this.element.querySelector(".card_title") as HTMLDivElement;
    
    this.addPerson(name)
  }

  private addPerson(name: string) {
    this.hostElement.appendChild(this.element)
    console.log(this.nameElement)
    console.log(name)
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