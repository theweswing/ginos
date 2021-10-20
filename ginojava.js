// Click RankUp
// Remove Parent Element
// Append Parent Element to its Parent, after its previouschild previouschild

//Click RankDown
// Remove Parent Element
// Append Parent Element after its Nextchild

//                                  THE PIZZA ROWS & TABLE

let pizzaMenuTable = document.getElementById('pizzaMenuTable')
let pizzaMenuTableBody = pizzaMenuTable.firstElementChild
let cheeseRow = document.getElementById('cheesePizza')
let mushroomsRow = document.getElementById('mushroomsPizza')
let onionsRow = document.getElementById('onionsPizza')
let pepperoniRow = document.getElementById('pepperoniPizza')
let sausageRow = document.getElementById('sausagePizza')
let peppersRow = document.getElementById('peppersPizza')
let pineapplesRow = document.getElementById('pineapplesPizza')
let picklesRow = document.getElementById('picklesPizza')
let submissionRow = document.getElementById('submitPizza')

//                                  THE RANK BUTTONS UP AND DOWN BUTTONS

let cheeseUp= document.getElementById("cheeseUp")
let cheeseDown= document.getElementById("cheeseDown")
cheeseUp.addEventListener("click", () => {
    let rowAbove = cheeseRow.previousElementSibling
    if (rowAbove.id !=="tableHeader"){
    let newPlacement = pizzaMenuTableBody.insertBefore(cheeseRow,rowAbove)
}})
cheeseDown.addEventListener("click", () => {
    let targetRow=cheeseRow.nextElementSibling.nextElementSibling
    let nextRow=cheeseRow.nextElementSibling
    if (nextRow.id !=="submitPizza"){
    let downvotedCheese=pizzaMenuTableBody.insertBefore(cheeseRow,targetRow)
}})

let mushroomsUp= document.getElementById("mushroomsUp")
let mushroomsDown= document.getElementById("mushroomsDown")
mushroomsUp.addEventListener("click", () => {
    let rowAbove = mushroomsRow.previousElementSibling
    if (rowAbove.id !=="tableHeader"){
    let newPlacement = pizzaMenuTableBody.insertBefore(mushroomsRow,rowAbove)
}})
mushroomsDown.addEventListener("click", () => {
    let targetRow=mushroomsRow.nextElementSibling.nextElementSibling
    let nextRow=mushroomsRow.nextElementSibling
    if (nextRow.id !=="submitPizza"){
    let downvotedMushrooms=pizzaMenuTableBody.insertBefore(mushroomsRow,targetRow)
}})

let onionsUp= document.getElementById("onionsUp")
let onionsDown= document.getElementById("onionsDown")
onionsUp.addEventListener("click", () => {
    let rowAbove = onionsRow.previousElementSibling
    if (rowAbove.id !=="tableHeader"){
    let newPlacement = pizzaMenuTableBody.insertBefore(onionsRow,rowAbove)
}})
onionsDown.addEventListener("click", () => {
    let targetRow=onionsRow.nextElementSibling.nextElementSibling
    let nextRow=onionsRow.nextElementSibling
    if (nextRow.id !=="submitPizza"){
    let downvotedOnions=pizzaMenuTableBody.insertBefore(onionsRow,targetRow)
}})

let pepperoniUp= document.getElementById("pepperoniUp")
let pepperoniDown= document.getElementById("pepperoniDown")
pepperoniUp.addEventListener("click", () => {
    let rowAbove = pepperoniRow.previousElementSibling
    if (rowAbove.id !=="tableHeader"){
    let newPlacement = pizzaMenuTableBody.insertBefore(pepperoniRow,rowAbove)
}})
pepperoniDown.addEventListener("click", () => {
    let targetRow=pepperoniRow.nextElementSibling.nextElementSibling
    let nextRow=pepperoniRow.nextElementSibling
    if (nextRow.id !=="submitPizza"){
    let downvotedPepperoni=pizzaMenuTableBody.insertBefore(pepperoniRow,targetRow)
}})

let sausageUp= document.getElementById("sausageUp")
let sausageDown= document.getElementById("sausageDown")
sausageUp.addEventListener("click", () => {
    let rowAbove = sausageRow.previousElementSibling
    if (rowAbove.id !=="tableHeader"){
    let newPlacement = pizzaMenuTableBody.insertBefore(sausageRow,rowAbove)
}})
sausageDown.addEventListener("click", () => {
    let targetRow=sausageRow.nextElementSibling.nextElementSibling
    let nextRow=sausageRow.nextElementSibling
    if (nextRow.id !=="submitPizza"){
    let downvotedSausage=pizzaMenuTableBody.insertBefore(sausageRow,targetRow)
}})

let peppersUp= document.getElementById("peppersUp")
let peppersDown= document.getElementById("peppersDown")
peppersUp.addEventListener("click", () => {
    let rowAbove = peppersRow.previousElementSibling
    if (rowAbove.id !=="tableHeader"){
    let newPlacement = pizzaMenuTableBody.insertBefore(peppersRow,rowAbove)
}})
peppersDown.addEventListener("click", () => {
    let targetRow=peppersRow.nextElementSibling.nextElementSibling
    let nextRow=peppersRow.nextElementSibling
    if (nextRow.id !=="submitPizza"){
    let downvotedPeppers=pizzaMenuTableBody.insertBefore(peppersRow,targetRow)
}})

let pineapplesUp= document.getElementById("pineapplesUp")
let pineapplesDown= document.getElementById("pineapplesDown")
pineapplesUp.addEventListener("click", () => {
    let rowAbove = pineapplesRow.previousElementSibling
    if (rowAbove.id !=="tableHeader"){
    let newPlacement = pizzaMenuTableBody.insertBefore(pineapplesRow,rowAbove)
}})
pineapplesDown.addEventListener("click", () => {
    let targetRow=pineapplesRow.nextElementSibling.nextElementSibling
    let nextRow=pineapplesRow.nextElementSibling
    if (nextRow.id !=="submitPizza"){
    let downvotedPineapples=pizzaMenuTableBody.insertBefore(pineapplesRow,targetRow)
}})

let picklesUp= document.getElementById("picklesUp")
let picklesDown= document.getElementById("picklesDown")
picklesUp.addEventListener("click", () => {
    let rowAbove = picklesRow.previousElementSibling
    if (rowAbove.id !=="tableHeader"){
    let newPlacement = pizzaMenuTableBody.insertBefore(picklesRow,rowAbove)
}})
picklesDown.addEventListener("click", () => {
    let targetRow=picklesRow.nextElementSibling.nextElementSibling
    let nextRow=picklesRow.nextElementSibling
    if (nextRow.id !=="submitPizza"){
    let downvotedPickles=pizzaMenuTableBody.insertBefore(picklesRow,targetRow)
}})


//                                 THE DELETE BUTTONS

// function deleteRow(button){ 
//     let parentRow=button.parentNode
//     let grandparent=parentRow.parentNode
//     grandparent.remove()
// }

let deleteButtonCheese= document.getElementById('deleteThisCheese')
deleteButtonCheese.addEventListener('click', () => {
    let parentRow=deleteButtonCheese.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonMushrooms= document.getElementById('deleteThisMushrooms')
deleteButtonMushrooms.addEventListener('click', () => {
    let parentRow=deleteButtonMushrooms.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonOnions= document.getElementById('deleteThisOnions')
deleteButtonOnions.addEventListener('click', () => {
    let parentRow=deleteButtonOnions.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonPepperoni= document.getElementById('deleteThisPepperoni')
deleteButtonPepperoni.addEventListener('click', () => {
    let parentRow=deleteButtonPepperoni.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonPeppers= document.getElementById('deleteThisPeppers')
deleteButtonPeppers.addEventListener('click', () => {
    let parentRow=deleteButtonPeppers.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonPineapple= document.getElementById('deleteThisPineapples')
deleteButtonPineapple.addEventListener('click', () => {
    let parentRow=deleteButtonPineapple.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonPickles= document.getElementById('deleteThisPickles')
deleteButtonPickles.addEventListener('click', () => {
    let parentRow=deleteButtonPickles.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

let deleteButtonSausage= document.getElementById('deleteThisSausage')
deleteButtonSausage.addEventListener('click', () => {
    let parentRow=deleteButtonSausage.parentNode
    let grandparent=parentRow.parentNode
    grandparent.remove()
})

//                      THE SUGGESTED FLAVOR ROW
let scamButton=document.getElementById("scamButton")
scamButton.addEventListener("click",e => alert("Up your nose with a rubber hose! Bafangool!"))

let submitPizzaForm= document.getElementById("submitPizzaForm")
submitPizzaForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addNewFlavor(e.target.newPizzaFlavor.value)
}
)

function addNewFlavor(flavorSubmission){
    let customFlavorRow = document.createElement('tr')
    let customFlavorColumnOne = document.createElement('td')
    let customFlavorColumnTwo = document.createElement('td')
    let customFlavorColumnThree = document.createElement('td')
    let customFlavorDeleteButton = document.createElement('button')
    let customFlavorUpButton = document.createElement('button')
    let customFlavorDownButton = document.createElement('button')

    customFlavorDeleteButton.type = "button"
    customFlavorDeleteButton.class = "deleteButton"
    customFlavorDeleteButton.textContent = "I've made a huge mistake, Gino!"
    customFlavorDeleteButton.addEventListener('click', () => {
        let parentColumn=customFlavorDeleteButton.parentNode
        let parentRow=parentColumn.parentNode
        parentRow.remove()
    })

    customFlavorUpButton.type = "button"
    customFlavorUpButton.class = "rankup"
    customFlavorUpButton.textContent = "↑"
    customFlavorUpButton.addEventListener('click', () => {
        let parentColumn=customFlavorUpButton.parentNode
        let parentRow=parentColumn.parentNode
        let rowAbove=parentRow.previousElementSibling
        if (rowAbove.id !=="tableHeader"){
        let newPlacement = pizzaMenuTableBody.insertBefore(parentRow,rowAbove)
    }})

    customFlavorDownButton.type = "button"
    customFlavorDownButton.class = "rankdown"
    customFlavorDownButton.textContent = "↓"
    customFlavorDownButton.addEventListener("click",() => {
        let targetRow=customFlavorRow.nextElementSibling.nextElementSibling
        let nextRow=customFlavorRow.nextElementSibling
        let parentColumn = customFlavorDownButton.parentNode
        let parentRow = parentColumn.parentNode
        if (nextRow.id !=="submitPizza"){
        let downvotedCustom=pizzaMenuTableBody.insertBefore(parentRow,targetRow)  
    }})

    customFlavorColumnOne.textContent=`${flavorSubmission}`
    customFlavorColumnTwo.textContent="$200"
    customFlavorColumnThree.append(customFlavorUpButton)
    customFlavorColumnThree.append(customFlavorDownButton)
    customFlavorColumnThree.append(customFlavorDeleteButton)
    customFlavorRow.appendChild(customFlavorColumnOne)
    customFlavorRow.appendChild(customFlavorColumnTwo)
    customFlavorRow.appendChild(customFlavorColumnThree)
    customFlavorRow.class = "customFlavorRow"
    let placedCustomRow = pizzaMenuTableBody.insertBefore(customFlavorRow,submissionRow)
}


//                                      INSERT BEFORE / EXPERIMENTS:

function createNewRow(){
    let newRow = document.createElement('tr')
    let cellOne=document.createElement('td')
    let cellTwo=document.createElement('td')
    let cellThree=document.createElement('td')
    newRow.append(cellOne)
    newRow.append(cellTwo)
    newRow.append(cellThree)
    return newRow
}

function insertNewRow(aNewRow,insertedBehind){
    pizzaMenuTableBody.insertBefore(aNewRow,insertedBehind)
}


// Moves everything to the bottom, does not work yet...

//                                THE SALARY MOUSEOVERS

let kwSalary = document.getElementById("kwSalary");
      kwSalary.addEventListener('mouseover', function(){
         
      })

//                                 THE HATE BUTTON (retired)

// let hatebuttons= document.getElementsByClassName("hateThis")
// hatebuttons[0].addEventListener("click",e => alert("You've got no taste!"))